require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const connectToDb = require('./config/connectToDb');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5001;

// Подключение к базе данных
connectToDb();

// Middleware
app.use(cors({
    origin: true, // Или укажите конкретный домен
    credentials: true,
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Маршрутизация
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Обработка ошибок (по желанию)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT,()=>{
console.log(`ServerConnected: ${PORT}`)
})





//const notesController = require('./controllers/notesController')
//--------------------------------------------[Routes => GET POST PUT PATCH DELETE]

//app.use(express.json())


//app.get('/notes',notesController.fetchNotes)
//--->Retrieve all note in DB
//app.get('/notes/id',notesController.fetchNote)
//--->Retrieve Specific note in DB
//app.post('/notes',notesController.createNote)
//---> Add a Note to DB
//app.put('/notes/:id',notesController.updateNote)
//---> Edit a Existing Note in DB
//app.delete('/notes/:id',notesController.deleteNote)
//--> Delete a Existing Note in DB

