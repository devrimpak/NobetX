const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { QuickDB } = require("quick.db");  // QuickDB import edilmesi
const db = new QuickDB({ filePath: "schedule.json" });  // Verilerin kaydedileceği dosya yolu

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 Tablodaki verileri getir
app.get("/get-schedule", async (req, res) => {
    const schedule = await db.get("schedule") || {};  // Veritabanından veriyi al
    res.json(schedule);  // JSON formatında geri gönder
});

// 🔹 Tablodaki verileri kaydet
app.post("/save-schedule", async (req, res) => {
    const { schedule } = req.body;  // Gönderilen veriyi al
    await db.set("schedule", schedule);  // Veriyi JSON dosyasına kaydet
    res.json({ message: "Ders programı kaydedildi!" });  // Kaydedildi mesajı döndür
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));
