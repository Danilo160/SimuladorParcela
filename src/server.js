const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use('/public', express.static(__dirname+'/pages/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/pages/home.html');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server online');
});