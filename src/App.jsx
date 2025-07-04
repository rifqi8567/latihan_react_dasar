//  import Footer from './components/Footer';
import React from 'react';



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
      <App1   />
      <App2   />
      <MyFooter />
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



 // cth penggunaan component



 function App1() {
    return (
      <div>
        <h1> Halo Semua!</h1>
        <p>Selamat datang</p>

       
      </div>
    )
 }

 function MyFooter() {
  return(
    <footer>
      <p>By Terra</p>
    </footer>
  )
 }

// cth component dlm bentu class

class App2 extends React.Component {
  render() {
    return (
      <>
      <h1>Halo semua !</h1>
      <p>selamat Datang</p>
      </>
    )
      
  }
}




