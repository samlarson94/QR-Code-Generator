import QRCode from 'qrcode';
import { useState } from 'react';


function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input type="text" placeholder="https://samlarson.tech" />
      <button class="generate-btn">Generate QR Code</button>
      <img src="" alt="" />
    </div>
  )
}

export default App
