const db = require('../db')
const Project = require('../models/project')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const projects = [
        {
        name: "Nikko Top",
        },
        {
        name: "Piper Christmas Dress for Lil A"
        },
        {
        name: "Peach Floral 2+2 Top for Big A",
        },
        {
        name: "Navy Fernway Culottes",
        },
        {
        name: "Palm Jersey Knit Romy Dress",
        },
    ]
    await Project.insertMany(projects)
    console.log("Created some projects")
}

const run = async () => {
    await main()
    db.close()
}

run()