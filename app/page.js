'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';
import { createRoot } from 'react-dom/client';

export default function Home() {
  const qrRef = useRef(null);
  const divRef = useRef(null);
  const btRef = useRef(null);
  const qrRoot = useRef(null);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'luvqr.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      alert('LuvQR has Downloaded💕');
    } else {
      console.error('QR Code canvas not found!');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loveMessage = formData.get('loveMessage');
    console.log('Love Message:', loveMessage);

    const data = {
      message: formData.get('loveMessage'),
    };
    try {
      const response = await fetch(
        'https://tdw-luv-qr.vercel.app/api/generate-qr',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      const res = await response.json();
      if (res.switch === 'on') {
        setTimeout(() => {
          if (qrRef.current) {
            qrRef.current.style.display = 'flex';
            divRef.current.style.display = 'flex';
            btRef.current.style.display = 'flex';
          }
        }, 0);
        if (!qrRoot.current) {
          qrRoot.current = createRoot(qrRef.current);
        }

        qrRoot.current.render(
          <QRCodeCanvas
            value={`https://tdw-luv-qr.vercel.app/loveMessage/${encodeURIComponent(
              res.data
            )}`}
            size={200}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
            imageSettings={{
              src: '/red-heart-paper-hand-craft-element_53876-128923.png',
              height: 30,
              width: 30,
              opacity: 1,
              excavate: true,
            }}
          />
        );
      }

      console.log('Response', res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-6xl font-bold mt-4 mr-2 text-center bg-gradient-to-r from-pink-500 to-red-100 text-transparent bg-clip-text font-mono italic underline ">
          LuvQR
        </h1>

        <h2 className="text-4xl font-bold mt-8 mr-2 text-center bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline">
          Express Love Through QR Codes!💕
        </h2>
        <h4 className="text-xl font-bold mt-6  mr-2 text-center bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline">
          A Simple Way to Send Hidden Love Messages...
        </h4>
        <p className="text-pink-200 text-sm mt-4 mr-2 text-center italic tracking-wide">
          📜 Create a Love Story with QRs! 💖Scan. Express. Love.
        </p>
      </div>
      <div>
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto mt-4 p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30"
        >
          <label className="block text-2xl font-bold text-center bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline mb-2">
            💕Express Your Love Here!
          </label>
          <br />
          <textarea
            name="loveMessage"
            placeholder="Start expressing your love here..."
            rows="7" /* Increase rows for more height */
            className="w-full h-40 p-4 text-lg text-pink-700 bg-white/90 border border-pink-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-pink-400 outline-none transition-all duration-300 resize-none"
          ></textarea>
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-red-400 text-white font-bold text-lg py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-200 hover:shadow-xl active:scale-100"
          >
            Generate QR
          </button>
        </form>
        <div
          ref={divRef}
          className="qrCode  w-[250px] h-[300px]  mx-auto mt-4 p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30"
        >
          <div id="qrCode" ref={qrRef}></div>
          <button
            ref={btRef}
            onClick={downloadQR}
            className="btRef bg-gradient-to-r from-pink-500 to-red-400 text-white font-bold text-white px-4 py-2 rounded mt-4"
          >
            Download LuvQR
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-4xl font-bold mt-16 mr-2 ml-12 bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline decoration-wavy">
          What is LuvQR?
        </h3>
        <p className="text-pink-200 text-lg mt-2 mr-2 ml-12 italic tracking-wide">
          LuvQR is a fun and romantic way for couples to exchange secret
          messages using QR codes.
          <br /> Write heartfelt notes, generate a QR, and let your partner scan
          to reveal your love-filled words!
        </p>
      </div>
      <div>
        <h3 className="text-4xl font-bold mt-16 mr-2 ml-12 bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline decoration-wavy">
          How it Works?
        </h3>{' '}
        <p className="text-pink-200 text-lg mt-2 mr-2 ml-12 italic tracking-wide">
          ✨ Write a Message: Type a sweet, loving, or fun message..
          <br /> 📲 Generate a QR Code: Let them scan and discover the magic.
          Your words are encoded into a unique QR. <br />
          💑 Relive Every Moment: Your love story, now stored forever in digital
          form.
        </p>
      </div>
      <div>
        <h3 className="text-4xl font-bold mt-16 mr-2 ml-12 bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline decoration-wavy">
          Why use LuvQR?
        </h3>
        <p className="text-pink-200 text-lg mt-2 mr-2 ml-12 italic tracking-wide">
          ✅ Quick & Simple – No app downloads needed, just scan & read. <br />
          💌 Personalized Love Notes – Send secret messages anywhere.
          <br /> 🔒 Private & Secure – Only your special one can decode the
          message.
          <br /> 🎁 Perfect for Surprises – Attach QRs to gifts, letters, or
          even random places!
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold mt-16 ml-12 mr-2 bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline decoration-wavy">
          Creative Ways to Use LuvQR!
        </h3>
        <p className="text-pink-200 text-lg mt-2 mr-2 ml-12 italic tracking-wide">
          💖 Leave a Note on Their Coffee Cup ☕ – A sweet morning surprise!{' '}
          <br />
          🎁 Attach a QR to a Gift 🎁 – Make presents more meaningful.
          <br />
          💌 Place It in a Book 📖 – Hide a love note inside their favorite
          read.
          <br />
          🏡 Stick It Around the House 🏠 – Tiny surprises in everyday places!
          <br />
        </p>
      </div>
      <div>
        <h3 className="text-4xl font-bold mt-16 mr-2 ml-12 bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline decoration-wavy">
          Start Sharing Love Today!
        </h3>
        <p className="text-pink-200 text-lg mt-2 mr-2 ml-12 italic tracking-wide">
          💡 Create Your First QR Love Message Now! 📥 It’s Free & Instant!
        </p>
      </div>
      <div>
        <h3 className="text-4xl font-bold mt-16 mr-2 ml-12 bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline decoration-wavy">
          Need Help or Have Suggestions?
        </h3>
        <p className="text-pink-200 text-lg mt-2 mr-2 ml-12 mb-6 italic tracking-wide">
          📩 Contact us – We’d love to hear from you!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mb-8 p-6">
        <div className="bg-pink-100 shadow-lg rounded-2xl p-8 max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            About the Developer
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            <b>Taran Mesala</b> - Full-Stack Developer & Creator of LuvQR
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            Hi, I&#39;m Taran Mesala, a passionate full-stack developer and the
            creator of <b>LoveQR</b>. With expertise in{' '}
            <b>MERN stack, Firebase, Next.js, and Angular</b>, I build
            interactive, scalable, and user-friendly applications. LoveQR is a
            blend of technology and emotions— designed to help users share
            heartfelt messages through uniquely and beautifully crafted QR
            codes.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            My focus is on developing high-quality, production-ready
            applications while ensuring smooth user experiences and efficient
            backend performance. If you&#39;d like to connect, collaborate, or
            explore more of my work, feel free to reach out!
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://www.snapchat.com/add/roxtar_john?share_id=-QaqTWw5a0w&locale=en-US" // Replace with your Snapchat link
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 text-lg transition duration-300"
            >
              Snapchat
            </a>

            <a
              href="https://www.instagram.com/__im.john.__" // Replace with your Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-600 text-lg transition duration-300"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/taran-mesala" // Replace with your LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-lg transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Taran1508" // Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 text-lg transition duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:meesalataran@gmail.com" // Replace with your email
              className="text-blue-500 hover:text-blue-600 text-lg transition duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <footer className="w-full text-center py-4 text-sm bg-pink-100 bottom-0 left-0">
        <p>
          © {new Date().getFullYear()} LuvQR. A project by{' '}
          <strong>TheousDevWorks</strong>. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
