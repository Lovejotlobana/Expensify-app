const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
// app.listen(3003, () => console.log('Server is up'));
app.listen(port, () => console.log('Server is up'));
