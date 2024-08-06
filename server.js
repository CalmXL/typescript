import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  next();
})


app.get('/get', (req, res) => {
  console.log(req.query);
  
  res.json(req.query);
});

app.post('/post', (req, res) => {
  res.json(req.body);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
})