import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper gambar">
      <div className="flex-wrapper">
        <div className="flex-judul">
          <div className="judul">
            <h1 className="sekolah">Sekolah</h1>
            <h1 className="unggul">Unggul</h1>
          </div>
        </div>
        <div className="flex-konten">
          <div className="konten">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="flex-button">
          <div className="button">
            <p className="text">Baca Selengkapnya</p>
          </div>
        </div>
      </div>
      <div className="opacity">
      </div>
      <div className="right">
        <i className="fa fa-chevron-left">
        </i>
      </div>
      <div className="left">
        <i className="fa fa-chevron-right">
        </i>
      </div>
    </div>
  );
}

export default App;
