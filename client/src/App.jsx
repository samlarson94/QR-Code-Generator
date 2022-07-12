import QRCode from 'qrcode';
import { useState } from 'react';


function App() {
  //Set up Use States
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  //Generate QR Code function - Image only needs a QR Code to display
  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) {
        return console.error(err);
      }else {
        console.log(url);
        setQrcode(url);
      }
    })
  }

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="https://samlarson.tech" value={url}
      onChange={(evt) => setUrl(evt.target.value)} />
      <button onClick={GenerateQRCode} class="generate-btn">Generate QR Code</button>
      <img src={qrcode} />
    </div>
  )
}

export default App
