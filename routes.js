const express = require("express");
const pool = require("./db");

const router = express.Router();

// Obtener empleados respetando caracteres especiales
router.get("/empleados", async (req, res) => {
  try {
    const result = await pool.query("SET client_encoding = 'UTF8'; SELECT * FROM nominasev2024_ LIMIT 10");
    res.json(result[1].rows); // PostgreSQL devuelve dos respuestas cuando se usa SET
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: "Error en la base de datos" });
  }
});

module.exports = router;
