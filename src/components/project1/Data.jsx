import React from "react";

const dummydata = [
  {
    urlPict:
      "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    nama: "Clasic car",
    description:
      "Simbol kemewahan masa lalu Perpaduan sempurna antara seni dan teknik Ikon otomotif yang abadi.",
  },
  {
    urlPict:
      "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MHwwfHx8MA%3D%3D",
    nama: "offRoad car",
    description:
      "Gaya vintage yang elegan Mesin bertenaga di balik bodi klasik Kenangan indah di setiap perjalanan.",
  },
  {
    urlPict:
      "https://images.unsplash.com/photo-1459603677915-a62079ffd002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
    nama: "Clasic car2",
    description:
      "Keanggunan tak lekang oleh waktu Desain klasik yang memukau Menghidupkan kembali era kejayaan.",
  },
  {
    urlPict:
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfDB8MHx8fDA%3D",
    nama: "Sport car",
    description:
      "Keanggunan tak lekang oleh waktu Desain klasik yang memukau Menghidupkan kembali era kejayaan.",
  },
  {
    urlPict:
      "https://images.unsplash.com/photo-1513178532803-0d3db9cf7696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfDB8MHx8fDA%3D",
    nama: "Vintage car",
    description:
      "Keanggunan tak lekang oleh waktu Desain klasik yang memukau Menghidupkan kembali era kejayaan.",
  },
  {
    urlPict:
      "https://images.unsplash.com/photo-1506610654-064fbba4780c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNhcnxlbnwwfDB8MHx8fDA%3D",
    nama: "Vintage Sport car",
    description:
      "Keanggunan tak lekang oleh waktu Desain klasik yang memukau Menghidupkan kembali era kejayaan.",
  },
];

function Data() {
  return (
    <div className="bg-[#e6e4dd]">
      <h1 className="text-7xl text-center underline decoration-black pt-5">
        Top Car
      </h1>
      <div className="flex justify-center items-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {dummydata.map((dummy, index) => (
            <div
              key={index}
              className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <img
                className="w-full"
                src={dummy.urlPict}
                alt={dummy.nama}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{dummy.nama}</div>
                <p className="text-gray-700 text-base">{dummy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-7xl text-center text-gradient-to-r from-[#4E5F4F] to-[#e6e4dd] underline decoration-black pt-8">
        JELASKAN DIRIMU LEWAT MOBIL
      </h1>
    </div>
  );
}

export default Data;
