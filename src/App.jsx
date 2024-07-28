import MainContent2 from './component/Main-container2';
import Navbar from './component/Navbar';
import Main from './component/main-container';
import MainContect3 from './component/Main-container3';
import Footer from './component/Footer';
import kbImage from "./assets/kb.jpeg";

const listGrid3 = [
  { id: 1,
    title:"Daftar Owner Laundry",
    description:"Owner laundry daftar melalu website kasirbersih untuk memonitor dan mengelola satu atau lebih cabang laundry",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>)
  },
  {
    id: 2,
    title:"Konfigurasi Outlet",
    description:"Tambahkan cabang outlet laundry yang kamu punya, buat akun kasir saat tambahkan outlet, lengkapi layanan, pafrum dan lainya.",
    icon : (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M10 9v-1.098l1.047-4.902h1.905l1.048 4.9v1.098c0 1.067-.933 2.002-2 2.002s-2-.933-2-2zm5 0c0 1.067.934 2 2.001 2s1.999-.833 1.999-1.9v-1.098l-2.996-5.002h-1.943l.939 4.902v1.098zm-10 .068c0 1.067.933 1.932 2 1.932s2-.865 2-1.932v-1.097l.939-4.971h-1.943l-2.996 4.971v1.097zm-4 2.932h22v12h-22v-12zm2 8h18v-6h-18v6zm1-10.932v-1.097l2.887-4.971h-2.014l-4.873 4.971v1.098c0 1.066.933 1.931 2 1.931s2-.865 2-1.932zm15.127-6.068h-2.014l2.887 4.902v1.098c0 1.067.933 2 2 2s2-.865 2-1.932v-1.097l-4.873-4.971zm-.127-3h-14v2h14v-2z"/></svg>)
  },
  {
    id:3,
    title:"Transaksi Kasir",
    description:"Kasir melalui aplikasi android kasirbersih dapat melakukan transaksi, cetak dan kirim nota ke wa, update progress cucian",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M10.81 11.885h-1.098l.066-.739h1.069l-.037.739zm.613 1.099h1.14l-.007-.739h-1.111l-.022.739zm.085-2.971l-.021.739h1.054l-.007-.739h-1.026zm-1.894 2.971h1.14l.038-.739h-1.112l-.066.739zm1.291-2.971h-1.026l-.066.739h1.054l.038-.739zm6.308 0l.137.739h1.054l-.165-.739h-1.026zm-4.115 0l.023.739h1.054l-.051-.739h-1.026zm1.155 1.872l-.051-.739h-1.069l.022.739h1.098zm3.309-4.885h-7.406l-.204 2h8.058l-.448-2zm-6.107 4.885h1.097l-.007-.739h-1.069l-.021.739zm2.874 1.099l-.051-.739h-1.111l.023.739h1.139zm-5.888-2.971h-1.025l-.134.739h1.054l.105-.739zm10.215 1.872l-.121-.739h-1.026l.093.739h1.054zm.185 1.134l-.121-.739h-1.069l.093.739h1.097zm1.946 1.099l-.165-.739h-2.833l.093.739h2.905zm-10.622-1.838h-1.069l-.134.739h1.098l.105-.739zm-1.402 1.838h1.139l.105-.739h-1.11l-.134.739zm-5.595.016l2.621-9h1.921c.112-.622.322-1.371.668-2h3.427c-.26.57-.499 1.259-.627 2h10.805l2.592 9h-2.221l-1.804-7h-9.42c.071.836.178 1.511-.107 2h-3.456c.292-.431.166-1.111.086-2h-.481l-1.739 7h-2.265zm5.101-6.631h2.298c-.157-1.076-.092-2.782.404-3.786h-2.249c-.553 1.006-.624 2.64-.453 3.786z"/></svg>)
  }
]

const App = () => {
  const sections = [
    { title: 'Progress Check', content: 'Konsumen laundry dapat melihat dengan mudah melalui link atau barcode update cucian mereka. pastinya jadi nilai plus untuk laundry yang menggunakan sistem ini.' },
    { title: 'Manajemen Pelanggan', content: 'Mengetahui informasi pelanggan, riwayat pesanan, preferensi, dan informasi kontak. Ini membantu Anda dalam memberikan layanan yang lebih personal dan membangun hubungan baik dengan pelanggan.' },
    { title: 'Nota Online', content: 'Selain dapat mencetak nota, nota transaksi dapat dikirimkan melalui WhatsApp kapan saja tanpa khawatir nota hilang pada saat pengambilan. Kasir dapat terhindar dari penipuan yang dikarenakan nota hilang.' },
    { title: 'Pencatatan Transaksi', content: 'Mencatat pesanan berdasarkan tipe antar jemput atau reguler, menghapus pesanan yang salah, mengelola pengeluaran dan pemasukan, berbagai metode pembayaran, termasuk tunai, dan non tunai' },
    { title: 'Grafik Kinerja Usaha', content: 'Dapatkan data kinerja usaha dengan waktu yang dinamis, lihat trafic waktu jam atau hari sibuk. download data untuk kamu olah kembali' },
    { title: 'Laporan Keuangan', content: 'Melalui laporan keuangan kamu bisa memantau kinerja bisnis dan mengambil keputusan yang lebih baik.' }
  ];

  return (
    <>
      <Navbar logo={kbImage}/>
      <Main />
      <MainContent2 
        title="Tentang Kasir Bersih" 
        description="Mengelola usaha laundry bukanlah tugas yang mudah. Ada banyak aspek yang perlu diperhatikan, mulai dari pencatatan transaksi hingga pemantauan proses laundry. Sering kali, pemilik usaha laundry dihadapkan pada tantangan mencatat uang masuk dan keluar dengan akurat, menghadapi saldo yang tidak sesuai, atau bahkan mengalami kerugian tanpa disadari." 
        additionalDescription="Kasir Bersih hadir sebagai solusi untuk masalah tersebut dengan menyediakan sistem manajemen laundry yang terintegrasi dan mudah digunakan." 
        sections={sections}
      />
      <MainContect3 listGrid3={listGrid3}/>
      <Footer />
    </>
  );
}

export default App;