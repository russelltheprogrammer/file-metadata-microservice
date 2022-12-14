const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//Post uploaded file
app.post('/api/fileanalyse', upload.single('file'), (req, res) => {
console.log(req);

  res.json({
    name: req.body.upfile,
    type: "",
    size: ""
  })
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
