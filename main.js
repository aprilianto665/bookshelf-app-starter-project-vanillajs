const books = [];
const RENDER_EVENT = "render-book";
const STORAGE_KEY = "BOOK_APPS";

function generateId() {
  return new Date().getTime();
}

function generateBookObject(id, title, author, year, isCompleted) {
  return {
    id,
    title,
    author,
    year,
    isCompleted,
  };
}

function findBook(bookId) {
  for (const bookItem of books) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }
  return null;
}

function findBookIndex(bookId) {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }
  return -1;
}

function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
  }
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);

  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function makeBook(bookObject) {
  const { id, title, author, year, isCompleted } = bookObject;

  const bookShelf = document.createElement("div");
  bookShelf.classList.add("bg-dark-green", "rounded", "p-3", "mb-3", "shadow");
  bookShelf.setAttribute("data-bookid", id);
  bookShelf.setAttribute("data-testid", "bookItem");

  const bookTitle = document.createElement("h3");
  bookTitle.setAttribute("data-testid", "bookItemTitle");
  bookTitle.innerText = title;

  const bookAuthor = document.createElement("p");
  bookAuthor.setAttribute("data-testid", "bookItemAuthor");
  bookAuthor.innerText = `Penulis: ${author}`;

  const bookYear = document.createElement("p");
  bookYear.setAttribute("data-testid", "bookItemYear");
  bookYear.innerText = `Tahun: ${year}`;

  const completeButton = document.createElement("button");
  completeButton.classList.add(
    "btn",
    "btn-outline-light",
    "shadow-sm",
    "py-2",
    "mx-1"
  );
  completeButton.setAttribute("data-testid", "bookItemIsCompleteButton");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "btn",
    "btn-outline-light",
    "shadow-sm",
    "py-2",
    "mx-1"
  );
  deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
  deleteButton.innerText = "Hapus Buku";

  const editButton = document.createElement("button");
  editButton.classList.add(
    "btn",
    "btn-outline-light",
    "shadow-sm",
    "py-2",
    "mx-1"
  );
  editButton.setAttribute("data-testid", "bookItemEditButton");
  editButton.innerText = "Edit Buku";

  editButton.addEventListener("click", function () {
    document.getElementById("bookFormTitle").value = title;
    document.getElementById("bookFormAuthor").value = author;
    document.getElementById("bookFormYear").value = year;
    document.getElementById("bookFormIsComplete").checked = isCompleted;

    const submitButton = document.getElementById("bookFormSubmit");
    submitButton.innerHTML = "Update Buku";

    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      updateBook(id);
    });
  });

  deleteButton.addEventListener("click", function () {
    removeBookFromCompleted(id);
  });

  if (isCompleted) {
    completeButton.innerText = "Belum selesai dibaca";

    completeButton.addEventListener("click", function () {
      undoBookFromCompleted(id);
    });
  } else {
    completeButton.innerText = "Selesai dibaca";

    completeButton.addEventListener("click", function () {
      addBookToCompleted(id);
    });
  }

  bookShelf.append(
    bookTitle,
    bookAuthor,
    bookYear,
    completeButton,
    deleteButton,
    editButton
  );

  return bookShelf;
}

function addBook() {
  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = document.getElementById("bookFormYear").value;
  const isCompleted = document.getElementById("bookFormIsComplete").checked;

  const generatedID = generateId();
  const bookObject = generateBookObject(
    generatedID,
    title,
    author,
    year,
    isCompleted
  );
  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function addBookToCompleted(bookId) {
  const bookTarget = findBook(bookId);
  if (bookTarget == null) return;

  bookTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function removeBookFromCompleted(bookId) {
  const bookTarget = findBookIndex(bookId);
  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoBookFromCompleted(bookId) {
  const bookTarget = findBook(bookId);
  if (bookTarget == null) return;

  bookTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function updateBook(bookId) {
  const bookIndex = findBookIndex(bookId);
  if (bookIndex === -1) return;

  const updatedTitle = document.getElementById("bookFormTitle").value;
  const updatedAuthor = document.getElementById("bookFormAuthor").value;
  const updatedYear = document.getElementById("bookFormYear").value;
  const updatedIsCompleted =
    document.getElementById("bookFormIsComplete").checked;

  books[bookIndex].title = updatedTitle;
  books[bookIndex].author = updatedAuthor;
  books[bookIndex].year = updatedYear;
  books[bookIndex].isCompleted = updatedIsCompleted;

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
  removeValue();
}

function removeValue() {
  const title = document.getElementById("bookFormTitle");
  const author = document.getElementById("bookFormAuthor");
  const year = document.getElementById("bookFormYear");
  const isCompleted = document.getElementById("bookFormIsComplete");

  title.value = "";
  author.value = "";
  year.value = "";
  isCompleted.checked = false;
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("bookForm");
  const checkbox = document.getElementById("bookFormIsComplete");
  const submitButton = document.querySelector("#bookFormSubmit span");

  function updateSubmitButtonText() {
    if (checkbox.checked) {
      submitButton.innerText = "Selesai dibaca";
    } else {
      submitButton.innerText = "Belum selesai dibaca";
    }
  }

  checkbox.addEventListener("change", updateSubmitButtonText);

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
    removeValue();
  });
  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener(RENDER_EVENT, function () {
  const uncompletedBooksList = document.getElementById("incompleteBookList");
  const completedBooksList = document.getElementById("completeBookList");

  uncompletedBooksList.innerHTML = "";
  completedBooksList.innerHTML = "";

  for (const bookItem of books) {
    const bookElement = makeBook(bookItem);
    if (!bookItem.isCompleted) {
      uncompletedBooksList.append(bookElement);
    } else {
      completedBooksList.append(bookElement);
    }
  }
});
