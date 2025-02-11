import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getMessage(id) {
  if (!id) return null;

  try {
    const res = await fetch(
      `http://tdw-luv-qr.vercel.app/api/loveMessage/${id}`,
      {
        cache: 'no-store', // Ensures fresh data
      }
    );

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Error fetching message:', error);
    return null;
  }
}

export default async function LoveMessagePage({ params }) {
  // `params.id` is available synchronously, no need to `await`
  if (!params?.id) return notFound();

  const data = await getMessage(params.id);

  if (!data) return notFound();

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
        <form className="formD max-w-xl mx-auto h-[650px] max-h-[800px] mt-4 p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
          <label className="block text-2xl font-bold text-center bg-gradient-to-r from-pink-400 to-red-100 text-transparent bg-clip-text font-mono italic underline mb-2">
            💕Your Love Message!
          </label>
          <br />
          <div
            name="loveMessage"
            className="loveMessage w-full min-h-[160px] max-h-[480px] p-4 text-lg text-pink-700 
             bg-white/90 border border-pink-300 rounded-2xl shadow-sm 
             focus:ring-2 focus:ring-pink-400 outline-none 
             transition-all duration-300 resize-none overflow-auto"
          >
            {data.message}
          </div>

          <Link
            href="/"
            className="link mt-4 w-[350px] bg-gradient-to-r from-pink-500 to-red-400 text-white font-bold text-lg py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-200 hover:shadow-xl active:scale-100"
          >
            Generate your Love Message
          </Link>
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
