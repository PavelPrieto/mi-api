require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = "147.79.74.107"; // 👉 Forzar que escuche en la IP del servidor

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Iniciar el servidor en la IP pública
app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
