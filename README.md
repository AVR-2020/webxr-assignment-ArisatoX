# Hunting Season
Github Pages: https://avr-2020.github.io/webxr-assignment-ArisatoX/index.html

Jika menggunakan Github pages, setelah selesai load pertama kali , tekan f5 untuk reload page dan barulah mulai bermain (detail bug dapat dilihat di bawah)

# Penjelasan Game
Game ini adalah game simulasi berburu yang dibuat dengan menggunakan A-Frame. Tujuan dari game ini adalah mendapatkan skor sebanyak-banyaknya dalam 5 menit dengan cara membunuh hewan yang ada di game ini. Terdapat 5 jenis hewan dan setiap hewan memiliki kriteria masing-masing seperti berikut:

1. Rusa memiliki 1 HP dan akan memberi 1 poin
2. Kuda memiliki 2 HP dan akan memberi 2 poin
3. Harimau memiliki 3 HP dan akan memberi 3 poin
4. Beruang memiliki 4 HP dan akan memberi 4 poin
5. Gajah memiliki 5 HP dan akan memberi 5 poin

Pemain akan membawa sebuah tembak yang berisi 10 peluru. Jika peluru habis, maka pemain akan terpaksa mengisi peluru secara otomatis ketika menekan SPACE.

Setelah game berakhir, pemain akan di teleport ke tengah area permainan. Disana, pemain dapat melihat skor yang mereka dapatkan dan dapat mengarahkan cursor ke tombol ulang untuk mengulangi permainan.

# Cara bermain:
- Tekan dan tahan WASD untuk bergerak
- Tahan tombol mouse kiri untuk membidik
- Tekan SPACE untuk menembak
- Tekan R untuk mengisi kembali peluru

# External resource yang digunakan
- Libraries
 * aframe environment component
 * aframe physics system
 * aframe extras
 * aframe look-at component
- Database
 * firebase

# Bug yang diketahui (* adalah cara untuk fix bug)
- Saat menggunakan github pages untuk deploy, game akan mengalami load time yang cukup lama pada saat pertama kali di load (sekitar 5 - 10 detik)
  * Gunakan live server untuk membuka game
- Saat menggunakan github pages untuk deploy, saat ditekan ctrl + f5 untuk refresh, library a-physics akan mengalami error dan semua hewan akan turun menembus tanah
  * Gunakan live server untuk membuka game
  * Tekan f5 saja maka game akan berjalan sesuai yang diinginkan, jangan gunakan ctrl + f5 untuk reload page hanya tekan f5 saja
- Saat menggunakan mozilla firefox, loading game sangat lama sekali
  * Gunakan google chrome untuk membuka game


