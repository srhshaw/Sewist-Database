const db = require('../db')
const Project = require('../models/project')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const projects = [
        {
        name: "Nikko Top",
        pattern: ["652c9046f48b01db51602d4c"],
        material: ["652c8dc1590fb147480ec1d0"],
        },
        {
        name: "Piper Christmas Dress for Lil A",
        pattern: ["652c9046f48b01db51602d45"],
        material: ["652c8dc1590fb147480ec1c9"],
        },
        {
        name: "Peach Floral 2+2 Top for Big A",
        pattern: ["652c8dc1590fb147480ec1ca"],
        material: ["652c9046f48b01db51602d44"],
        },
        {
        name: "Navy Fernway Culottes",
        pattern: ["652c9046f48b01db51602d4a"],
        material: ["652c8dc1590fb147480ec1c7"],
        },
        {
        name: "Palm Jersey Knit Romy Dress",
        pattern: ["652c9046f48b01db51602d4d"],
        material: ["652c8dc1590fb147480ec1cb"],
        },
    ]
    await Project.insertMany(projects)
    console.log("Created some projects!")
}

const run = async () => {
    await main()
    db.close()
}

run()