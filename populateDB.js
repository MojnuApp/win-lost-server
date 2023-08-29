const mongoose = require('mongoose');
const Day = require('./models/Day');

mongoose.connect('mongodb://admin:mojnu13@ac-r7tsoou-shard-00-00.dgjlksi.mongodb.net:27017,ac-r7tsoou-shard-00-01.dgjlksi.mongodb.net:27017,ac-r7tsoou-shard-00-02.dgjlksi.mongodb.net:27017/WinLost?replicaSet=atlas-6g6n8a-shard-0&ssl=true&authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const daysData = [{ "date": "2023-08-18", "namaz": 0, "quran": 0, "noSmoking": 0, "study": 0, "contactFamily": 5, "jobApply": 0, "importantWork": "এই ওয়েবসাইট তৈরি করেছি ", "giftChoice": "No Gift", "score": "16.67%", "result": "lose" }, { "date": "2023-08-19", "namaz": 0, "quran": 0, "noSmoking": 0, "study": 0, "contactFamily": 5, "jobApply": 0, "importantWork": "", "giftChoice": "No Gift", "score": "16.67%", "result": "lose" }, { "date": "2023-08-20", "namaz": 0, "quran": 0, "noSmoking": 0, "study": 0, "contactFamily": 0, "jobApply": 0, "importantWork": "", "giftChoice": "No Gift", "score": "0.00%", "result": "lose" }, { "date": "2023-08-21", "namaz": 0, "quran": 0, "noSmoking": 0, "contactFamily": 0, "jobApply": 0, "exercise": 5, "mernJob": 0, "reactBook": 0, "certificateStudy": 0, "importantWork": "", "giftChoice": "No Gift", "score": "11.11%", "result": "lose" }, { "date": "2023-08-22", "namaz": 0, "quran": 0, "noSmoking": 0, "contactFamily": 5, "jobApply": 0, "exercise": 5, "mernJob": 0, "reactBook": 0, "certificateStudy": 0, "importantWork": "", "giftChoice": "No Gift", "score": "22.22%", "result": "lose" }, { "date": "2023-08-23", "namaz": 0, "quran": 0, "noSmoking": 0, "contactFamily": 0, "jobApply": 0, "exercise": 5, "mernJob": 0, "reactBook": 0, "certificateStudy": 0, "importantWork": "", "giftChoice": "No Gift", "score": "11.11%", "result": "lose" }, { "date": "2023-08-24", "namaz": 0, "quran": 0, "noSmoking": 0, "contactFamily": 0, "jobApply": 0, "exercise": 0, "mernJob": 0, "reactBook": 0, "certificateStudy": 0, "importantWork": "", "giftChoice": "No Gift", "score": "0.00%", "result": "lose" }, { "date": "2023-08-25", "namaz": 0, "quran": 0, "noSmoking": 0, "contactFamily": 5, "jobApply": 0, "exercise": 5, "mernJob": 0, "reactBook": 0, "certificateStudy": 0, "water": 0, "word": 0, "sleep": 0, "importantWork": "", "giftChoice": "No Gift", "score": "16.67%", "result": "lose" }, { "date": "2023-08-26", "namaz": 0, "quran": 0, "noSmoking": 0, "contactFamily": 0, "jobApply": 0, "exercise": 0, "mernJob": 0, "reactBook": 0, "certificateStudy": 0, "water": 0, "word": 0, "sleep": 0, "importantWork": "", "giftChoice": "No Gift", "score": "0.00%", "result": "lose" }, { "date": "", "namaz": 0, "quran": 0, "noSmoking": 0, "contactFamily": 0, "jobApply": 0, "exercise": 0, "mernJob": 5, "reactBook": 0, "certificateStudy": 0, "water": 0, "word": 0, "sleep": 0, "importantWork": "", "giftChoice": "No Gift", "score": "8.33%", "result": "lose" }, { "date": "2023-08-26", "namaz": 5, "quran": 0, "noSmoking": 0, "contactFamily": 0, "jobApply": 5, "exercise": 0, "mernJob": 5, "reactBook": 5, "certificateStudy": 5, "water": 0, "word": 0, "sleep": 5, "importantWork": "", "giftChoice": "No Gift", "score": "50.00%", "result": "lose" }, { "date": "2023-08-27", "namaz": 0, "quran": 0, "noSmoking": 0, "contactFamily": 0, "jobApply": 0, "exercise": 0, "mernJob": 0, "reactBook": 0, "certificateStudy": 0, "water": 0, "word": 0, "sleep": 0, "importantWork": "", "giftChoice": "No Gift", "score": "0.00%", "result": "lose" }];

async function populateDB() {
    try {
        await Day.insertMany(daysData);
        console.log('Database populated successfully');
    } catch (error) {
        console.error('Error populating database:', error);
    } finally {
        mongoose.connection.close();
    }
}

populateDB();
