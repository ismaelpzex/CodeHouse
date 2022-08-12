const express = require('express');
const multer = require('multer');
const cors = require('cors');
const upload = multer({
    dest: 'public/images'
});
const fs = require('fs');

const app = express();

//App Config
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.post('/api/contactos', upload.single('imagen'), (req, res) => {
    const newPath = `${req.file.destination}/${req.file.originalname}`;
    fs.renameSync(req.file.path, newPath);
    req.body.imagen = `images/${req.file.originalname}`;
    res.json(req.body);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT}`);
});