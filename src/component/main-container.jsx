import "./main-container.css";

const Main = () => {
  return (
    <main className="mainC" id="Home">
      <div className="grid-container">
        <div className="grid-item text-content">
          <h2>Lebih Dari Aplikasi Kasir</h2>
          <h2 className="text-tanpa-biaya">Tanpa Biaya Aktivasi</h2>
          <h2>Pertama di Indonesia</h2>
          <br />
          <br />
          <h3>"DAFTAR SEKARANG"</h3>
          <br />
          <h3>Gratis 10.000 Token untuk 130 Transaksi</h3>
          <div className="btn-container">
            <button className="btn1">Login Dashboard Owner</button>
            <button className="btn2"><a href="https://play.google.com/store/apps/details?id=com.kasir.kasirbersih" target="_blank">Download Aplikasi Kasir</a></button>
          </div>
        </div>

        <div className="grid-item image-content">
          <img className="img-content"
            src="https://kasirbersih.id/static/media/device.4ccac4ca39dc0b703c91.png"
            alt="Daftar Kasir"
          />
        </div>
      </div>
    </main>
  );
}; 

export default Main;
