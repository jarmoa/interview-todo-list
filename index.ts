import express from 'express'
const app = express()

app.get('/', (_req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/tasks', (_req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.post('/tasks', (req, res) => {
  res.send('POST request to homepage')
})

app.put('/tasks/:id', (req, res) => {
  res.send('PUT request to homepage')
})

app.delete('/tasks/:id', (req, res) => {
  res.send('DELETE request to homepage')
})

const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
