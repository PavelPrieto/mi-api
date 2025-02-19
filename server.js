require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0"; // Permitir conexiones desde cualquier IP

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Obtener la IP pública del servidor
function getServerIP() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    for (const config of iface) {
      if (config.family === "IPv4" && !config.internal) {
        return config.address;
      }
    }
  }
  return "localhost";
}

const IP_ADDRESS = getServerIP();

app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${IP_ADDRESS}:${PORT}`);
});
