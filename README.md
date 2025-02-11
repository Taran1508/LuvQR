# LuvQR

LuvQR is a QR code generator and scanner designed to make sharing links, text, and other information seamless and efficient. Built with modern web technologies, LuvQR provides a fast and easy way to generate and scan QR codes with an intuitive user experience.

## Features
- **Generate QR Codes:** Convert text, URLs, or any input into a QR code instantly.
- **Scan QR Codes:** Use your device's camera to scan and decode QR codes.
- **Download & Share:** Save generated QR codes as images and share them effortlessly.
- **History Management:** Keep track of generated and scanned QR codes.
- **Mobile-Friendly:** Optimized for both desktop and mobile users.

## Tech Stack
- **Frontend:** React.js (Next.js for SSR)
- **Backend:** Node.js
- **Database:** MongoDB (for saving QR history)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js & npm
- MongoDB (if using database storage)

### Steps
### Clone the repository:
   ```sh
   git clone https://github.com/yourusername/luvqr.git
   cd luvqr
 ```
### Setup Application

```bash
npm install
```

### Run Full Stack Application

```bash
npm run dev
```

## Environment Variables

Create a .env file in the backend directory and set up the following variables:
```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
```

## Usage

1. Enter a URL or text in the input field to generate a QR code.
2. Click the "Generate QR" button.
3. Scan QR codes using the scanner feature.
4. Save or share the generated QR code.

## API Endpoints

| Method | Endpoint             | Description                          |
|--------|----------------------|--------------------------------------|
| POST   | `/generate-qr`       | Generate QrCode                      |
| GET    | `/:id`               | Display encrypted message         |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
