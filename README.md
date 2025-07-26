# Linkify

Linkify is a URL shortening service that allows users to shorten long URLs quickly and efficiently. It provides a user-friendly interface and additional features like QR code generation and local storage for managing shortened links.

## Features

- **URL Shortening**: Easily shorten long URLs.
- **QR Code Generation**: Instantly generate QR codes for shortened URLs.
- **Local Storage**: Save and manage your shortened links locally.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/linkify.git
   cd linkify
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Build for production:

   ```sh
   npm run build
   ```

5. Preview the production build:
   ```sh
   npm run preview
   ```

## Usage

- **Shorten a URL**: Enter a long URL and click "Shorten".
- **View Shortened Links**: See all your shortened links in a table.
- **Generate QR Code**: Click the QR code button for any link.
- **Copy to Clipboard**: Use the copy button to copy a shortened URL.
- **Delete a Link**: Remove unwanted links with the delete button.
- **Clear Local Storage**: Remove all saved links at once.

## Configuration

- **Tailwind CSS**: Customize styles in `tailwind.config.js`.
- **Vite**: Adjust build settings in `vite.config.js`.

## Dependencies

- [Toastify JS](https://github.com/apvarun/toastify-js)
- [QRCode.js](https://github.com/davidshimjs/qrcodejs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## License

This project is licensed under the MIT License.
