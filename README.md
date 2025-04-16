<<<<<<< HEAD
# Bookshelf App Starter Project

Ini adalah starter project untuk siswa yang sedang mengerjakan tugas akhir kelas Belajar Membuat Front-End Web untuk Pemula.

## Ketentuan Pengerjaan Tugas

Untuk mempermudah penilaian submission yang dikirim, Anda perlu memahami ketentuan-ketentuan berikut dalam mengerjakan tugas ini.

- Anda dilarang mengedit atau menghapus atribut `data-testid` pada elemen-elemen HTML.
- Ini masih berkaitan dengan poin sebelumnya. Jika Anda memiliki kebutuhan seperti styling elemen dan perlu menambahkan atribut seperti class, itu tidak dilarang selama atribut `data-testid` beserta nilainya tidak diubah atau dihapus.
- Dalam menampilkan data-data buku, Anda wajib memberikan beberapa atribut pada setiap elemennya.

  - `data-bookid`: menampung nilai ID masing-masing buku.
  - `data-testid`: penanda jenis data buku yang ditampilkan. Berikut daftarnya.
    - `bookItem`: elemen kontainer yang menampung data-data buku.
    - `bookItemTitle`: judul buku
    - `bookItemAuthor`: penulis buku
    - `bookItemYear`: tahun rilis buku
    - `bookItemIsCompleteButton`: tombol untuk mengubah kondisi buku dari “Belum selesai dibaca” menjadi “Selesai dibaca” atau sebaliknya.
    - `bookItemDeleteButton`: tombol untuk menghapus buku.
    - `bookItemEditButton`: tombol untuk mengubah data buku.

  Agar pengerjaan tugas lebih mudah, Anda dapat mengikuti templat buku berikut.

```html
<div data-bookid="{{ ID_buku }}" data-testid="bookItem">
  <h3 data-testid="bookItemTitle">{{ judul_buku }}</h3>
  <p data-testid="bookItemAuthor">Penulis: {{ penulis_buku }}</p>
  <p data-testid="bookItemYear">Tahun: {{ tahun_rilis_buku }}</p>
  <div>
    <button data-testid="bookItemIsCompleteButton">{{ tombol_untuk_ubah_kondisi }}</button>
    <button data-testid="bookItemDeleteButton">{{ tombol_untuk_hapus }}</button>
    <button data-testid="bookItemEditButton">{{ tombol_untuk_edit }}</button>
  </div>
</div>
```

Selamat mengerjakan dan sukses selalu!
=======
# 📚 Bookshelf App - Starter Project (Vanilla JS)
Bookshelf App adalah aplikasi sederhana berbasis vanilla JavaScript yang memungkinkan pengguna untuk mencatat dan mengelola daftar buku yang sedang atau sudah dibaca. Cocok sebagai latihan untuk memahami dasar-dasar DOM manipulation, event handling, dan penyimpanan data di browser menggunakan localStorage.

Proyek ini merupakan bagian dari submission kelas Belajar Membuat Front-End Web untuk Pemula di platform Dicoding.

# 📸 Tampilan Aplikasi
![image](https://github.com/user-attachments/assets/11256ca1-1444-4eb3-b900-a67b2a114738)

# ✨ Fitur Aplikasi
Aplikasi ini memungkinkan pengguna untuk:

✅ Tambah buku dengan judul, penulis, dan tahun terbit

✅ Tandai buku sebagai selesai dibaca atau belum

✅ Hapus buku dari daftar

✅ Pencarian buku berdasarkan judul

✅ Penyimpanan data lokal secara otomatis (persistent via localStorage)

# 🛠️ Teknologi:
- HTML5, CSS3, JavaScript (Vanilla JS)

* Bootstrap

+ localStorage untuk penyimpanan data

# 📚 Tentang Submission Ini
📌 Kelas: Belajar Membuat Front-End Web untuk Pemula

🎓 Platform: Dicoding

🧑‍💻 Disubmit oleh: Muhammad Aprilianto

📅 Tahun: 2025

# 📄 License
Proyek ini dibuat untuk tujuan pembelajaran dan tidak memiliki lisensi khusus. Silakan gunakan atau kembangkan sesuai kebutuhanmu.
>>>>>>> 4ffc5040988ba6da700239533a540a1a35d0b1da
