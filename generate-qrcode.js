import QRCode from "qrcode";

const url = "https://patientcompanion.netlify.app";

await QRCode.toFile("home-qrcode.png", url, {
  width: 1000,
  margin: 2,
  color: {
    dark: "#133558",
    light: "#ffffff",
  },
});

console.log(`Generated QR code for ${url}`);
