const Pool = require('pg').Pool

const pool = new Pool({
        host: "35.232.238.233",
        port: 5432,
        user: "postgres",
        password: "?passwd?",
        database: "heroes",
})

const getAllHeroes = (req, res) => {
  pool.query('SELECT * FROM heroes', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const getHeroByID = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query('SELECT * FROM heroes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

const createHero = (req, res) => {
  const { name, powers } = req.body
  pool.query('INSERT INTO heroes (name, powers) VALUES ($1, $2)', [name, powers], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Hero added`)
  })
}

const updateHero = (req, res) => {
  const id = parseInt(req.params.id)
  const { name, powers } = req.body
  pool.query(
    'UPDATE heroes SET name = $1, powers = $2 WHERE id = $3',
    [name, powers, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`Hero modified with ID: ${id}`)
    }
  )
}

const deleteHero = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query('DELETE FROM heroes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`Hero deleted with ID: ${id}`)
  })
}

module.exports = {
  getAllHeroes,
  getHeroByID,
  createHero,
  updateHero,
  deleteHero,
}