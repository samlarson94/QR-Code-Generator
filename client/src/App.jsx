import QRCode from 'qrcode';
import { useState } from 'react';


function App() {
  //Set up Use States
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  //Generate QR Code function - Image only needs a QR Code to display
  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width: 800,
      margin: 2,
      color: {
        dark: '#ffffffff',
        light: '#000000ff'
      }
    }, (err, url) => {
      if (err) {
        return console.error(err);
      } else {
        console.log(url);
        setQrcode(url);
      }
    })
  }
//HandleKeyDown Event for Input
  const handleKeyDown = event => {
    console.log('Key Pressed: ', event.key);
    console.log('URL Input Entered: ', url);

    if (event.key === 'Enter') {
      GenerateQRCode();
    }
  }


  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="https://samlarson.tech" value={url}
      onChange={(evt) => setUrl(evt.target.value)} 
      onKeyDown={handleKeyDown} />
      <button onClick={GenerateQRCode} className="generate-btn">Generate QR Code</button>
      {/* Wrapping QRCode in Conditional - Adding link to Download */}
      {qrcode && <>
        <img src={qrcode} />
        <a href={qrcode} download="qrcode.png">Download</a>
        </>
      }
    </div>
  )
};

export default App
