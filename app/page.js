'use client';

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loveMessage = formData.get('loveMessage');
    console.log('Love Message:', loveMessage);
    const data = {
      message: formData.get('loveMessage'),
    };
    try {
      const response = await fetch('http://localhost:3000/api/generate-qr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const res = await response.json();
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
        <p className="text-pink-200 text-lg mt-2 mr-2 ml-12 mb-10 italic tracking-wide">
          📩 Contact us – We’d love to hear from you!
        </p>
      </div>
    </>
  );
}
