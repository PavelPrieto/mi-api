require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const os = require("os");

const app = express(); // 🛠️ Definir `app` antes de usarlo
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Manejar caracteres especiales

// Forzar UTF-8 en las respuestas
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});

app.use("/api", routes);

// Obtener la IP de la máquina
function getLocalIP() {
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

const IP_ADDRESS = getLocalIP();

app.listen(PORT, () => {
  console.log(`Servidosr corriendo en http://${IP_ADDRESS}:${PORT}`);
});
