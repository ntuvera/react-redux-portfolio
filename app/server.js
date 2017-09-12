process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const root = path.join(__dirname, 'dist');

app.use(express.static(root));
app.set('view engine', 'html');

// app.use(express.static('assets'));

// always fallback to index.html
// app.use(function(req, res) {
//     res.sendFile(path.join(root, 'index.html'));
// });
//
app.get('/', function(req, res){
  res.sendFile(path.join(root, 'index.html'));
});

app.listen(PORT, function() {
    console.log('Server running on port:', PORT);
    console.log('Running in environment:', process.env.NODE_ENV);
});
