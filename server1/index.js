const express = require('express')
const app = express()
var config = require('./config.js')

const port = 3000
const bodyParser = require('body-parser')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+ '-' + file.originalname);

    }
})
const upload = multer({storage: storage});




app.get('/', (req,res) => res.sendFile(config.baseFilePath + 'frontpage.html'));
app.get('/stylesheet.css', (req,res)=> res.sendFile(config.baseFilePath + '/stylesheet.css'))
app.get('/uploads', (req, res, err) => {
    res.status(200).send("Gay Man");

})
app.get('/profile.html', (req, res, err) => {
    res.status(200).send("Gay Man Tinder");

})

app.post('/upload', upload.array('image'), (req,res,err) => {
    console.log(req.file)
    if(err){
        console.log(err)
    }
    res.status(200).redirect('/');

    
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))
