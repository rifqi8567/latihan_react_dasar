function App () {
  let lisBuah = ["jeruk", "Rambutan", "pepaya"];

  return (
    <>
      <h2>Daftar Buah:</h2>
      <ul>
        {lisBuah.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />

      <Hewan /> {/* 🔥 Ini manggil komponen Hewan */}
    </>
  );
}

function Hewan() {
  let LisHewan = ["Kucing", "ayam", "Katak"];

  return (
    <>
      <h2>Daftar Hewan:</h2>
      <ul>
        {LisHewan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
