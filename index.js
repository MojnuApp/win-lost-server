const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dayRoutes = require('./routes/dayRoute');
const authRoutes = require('./routes/authRoutes');
const alterDayRoutes = require('./routes/altDayRoutes');
const formDataRoutes = require('./routes/formDataRoutes');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://admin:mojnu13@ac-r7tsoou-shard-00-00.dgjlksi.mongodb.net:27017,ac-r7tsoou-shard-00-01.dgjlksi.mongodb.net:27017,ac-r7tsoou-shard-00-02.dgjlksi.mongodb.net:27017/WinLost?replicaSet=atlas-6g6n8a-shard-0&ssl=true&authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Define your routes here
// Use dayRoutes
app.use('/api/day', dayRoutes);
app.use('/api/days', dayRoutes);

// auth routes
app.use('/api/auth', authRoutes);


// Form Data Routes: POST
app.use('/api/form-data', formDataRoutes);

// Get Form Data
app.use(formDataRoutes);

// alternative day route
app.use('/api/day', alterDayRoutes);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
