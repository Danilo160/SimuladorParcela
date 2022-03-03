const express = require('express');
const cors = require('cors');
//const ejs = require('ejs');

const app = express();
app.use(cors());
app.use('/public', express.static(__dirname+'/pages/public'));
res.sendFile(__dirname+'/pages/home.html');
//app.set('view engine', 'ejs');
//app.set('views', __dirname+'/pages');
/*app.get('/', (req, res) => {
    res.render('home');
});*/

app.listen(process.env.PORT || 3000, () => {
    console.log('Server online');
});