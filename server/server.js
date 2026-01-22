const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors()); 
app.use(express.json()); 


let comentarios = [
    { 
      id: 1, 
      usuario: "María González", 
      logro: "Bajó 15 kg en 6 meses",
      texto: "Demo Gym cambió mi vida. Los profes son increíbles y el ambiente es super motivador. Las clases de funcional son mi favorito!", 
      estrellas: 5 
    },
    { 
      id: 2, 
      usuario: "Rodrigo Silva", 
      logro: "Ganó 8 kg de masa muscular",
      texto: "El equipamiento es de primera y estar abierto 24hs me permite entrenar cuando puedo. La mejor inversión que hice.", 
      estrellas: 5 
    },
    { 
      id: 3, 
      usuario: "Lucía Fernández", 
      logro: "Socia hace 2 años",
      texto: "Me encanta la variedad de clases. Voy a spinning, yoga y GAP. Siempre hay algo nuevo y los instructores son profesionales.", 
      estrellas: 5 
    }
  ];

app.get('/api/comentarios', (req, res) => {
  res.json(comentarios);
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});