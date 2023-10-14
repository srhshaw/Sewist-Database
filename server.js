const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')

const sewingController = require('./controllers/sewingController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

//PATTERNS
    app.get('/patterns', sewingController.getAllPatterns)
    app.get('/patterns/:id', sewingController.getOnePattern)
    app.post('/patterns', sewingController.createPattern)
    app.put('/patterns/:id', sewingController.updatePattern)
    app.delete('/patterns/:id', sewingController.deletePattern)

//MATERIALS
    app.get('/materials', sewingController.getAllMaterials)
    app.get('/materials/:id', sewingController.getOneMaterial)
    app.post('/materials', sewingController.createMaterial)
    app.put('/materials/:id', sewingController.updatePattern)
    app.delete('/materials/:id', sewingController.deletePattern)

//PROJECTS
    app.get('/projects', sewingController.getAllProjects)
    app.get('/projects/:id', sewingController.getOneProject)
    app.post('/projects', sewingController.createProject)
    app.put('/projects/:id', sewingController.updateProject)
    app.delete('/projects/:id', sewingController.deleteProject)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})