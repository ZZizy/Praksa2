const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./queries');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/heroes', db.getAllHeroes)
app.get('/heroes/:id', db.getHeroByID)
app.post('/heroes', db.createHero)
app.put('/heroes/:id', db.updateHero)
app.delete('/heroes/:id', db.deleteHero)

//dinamično nastavljanje
//environmental variable: PORT
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));