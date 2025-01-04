# Library AnimationHandler

## Gambaran Umum
`AnimationHandler` adalah library JavaScript ringan yang dirancang untuk menambahkan animasi berbasis scroll pada elemen di halaman web Anda. Library ini mempermudah implementasi berbagai efek seperti sliding, zooming, bouncing, dan lainnya menggunakan API Intersection Observer.

## Fitur
- Animasi elemen saat muncul di layar.
- Beragam animasi bawaan: slide, zoom, rotate, bounce, flip, fade, spin, scale, wobble, dan type.
- Durasi animasi dan threshold visibilitas yang dapat dikonfigurasi.
- Ringan dan mudah digunakan.

## Instalasi
Sertakan file `AnimationHandler.js` dalam proyek Anda.

```html
<script type="module" src="AnimationHandler.js"></script>
```

## Penggunaan

### Pengaturan HTML
Tambahkan atribut `data-animation` pada elemen yang ingin dianimasikan dan tentukan jenis animasi yang diinginkan. Contoh:

```html
<div class="box" data-animation="slide">Animasi Slide</div>
<div class="box" data-animation="zoom">Animasi Zoom</div>
<div class="box" data-animation="rotate">Animasi Rotate</div>
```

### Inisialisasi JavaScript
Impor kelas `AnimationHandler` dan inisialisasi dengan selector elemen yang akan dianimasikan.

```javascript
import { AnimationHandler } from './AnimationHandler.js';

new AnimationHandler('.box');
```

### Parameter
`AnimationHandler(selector, threshold = 0.5, durationEffect = 500)`

- **`selector`** *(string)*: Selector CSS untuk elemen target.
- **`threshold`** *(float)*: Threshold visibilitas (default: `0.5`). Menentukan seberapa banyak elemen harus terlihat untuk memicu animasi.
- **`durationEffect`** *(int)*: Durasi animasi dalam milidetik (default: `500`).

## Jenis Animasi yang Didukung
Berikut adalah jenis animasi yang tersedia beserta efeknya:

| Jenis Animasi  | Deskripsi                         |
|----------------|-----------------------------------|
| `slide`        | Memindahkan elemen secara horizontal. |
| `zoom`         | Menskalakan elemen dari kecil ke ukuran normal. |
| `rotate`       | Memutar elemen dari sudut tertentu. |
| `bounce`       | Memberikan efek pantulan vertikal. |
| `flip`         | Memutar elemen pada sumbu Y. |
| `fade`         | Menghilangkan elemen secara perlahan. |
| `spin`         | Memutar elemen dalam lingkaran penuh. |
| `scale`        | Menskalakan elemen dari kecil ke ukuran normal. |
| `wobble`       | Memberikan efek goyangan horizontal. |
| `type`         | Mensimulasikan efek mengetik pada teks. |

## Contoh
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo AnimationHandler</title>
    <script type="module" src="AnimationHandler.js" defer></script>
    <style>
        .box {
            width: 200px;
            height: 100px;
            margin: 20px auto;
            background: lightblue;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <div class="box" data-animation="slide">Slide</div>
    <div class="box" data-animation="zoom">Zoom</div>
    <div class="box" data-animation="rotate">Rotate</div>

    <script>
        import { AnimationHandler } from './AnimationHandler.js';
        new AnimationHandler('.box');
    </script>
</body>
</html>
```

## Lisensi
Library ini bersifat open-source dan tersedia di bawah [Lisensi MIT](LICENSE).

## Kontribusi
Kontribusi sangat diterima! Jangan ragu untuk mengajukan masalah, permintaan fitur, atau pull request.

---
Untuk pertanyaan lebih lanjut, silakan hubungi penulis library atau lihat kode sumber untuk wawasan lebih mendalam.
