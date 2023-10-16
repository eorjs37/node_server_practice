const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000;

app.use(cors({
    origin: "*"
}))

app.get('/api', (req, res) => {
    res.json([{ id: 1, username: "daisy" }])
})

app.get('/api/list', (req, res) => {
    res.json([{ id: 1, username: "daisy" }])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})