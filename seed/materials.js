const db = require('../db')
const {Material} = require('../models/material')

db.on('error', console.error.bind(console, 'MondoDB Connection error:'))

const main = async () => {
    const materials = [
        {
        name: "Gold Burnout Knit",
        woven: "false",
        lengthInYds: 2,
        widthInInches: 60,
        },
        {
        name: "Navy Cotton Jersey",
        woven: "false",
        lengthInYds: 5,
        widthInInches: 56,
        },
        {
        name: "Yellow Floral Cotton",
        woven: "true",
        lengthInYds: 2,
        widthInInches: 41,
        },
        {
        name: "Kelly Green Velvet",
        woven: "true",
        lengthInYds: 5,
        widthInInches: 42,
        },
        {
        name: "Peach Floral Cotton",
        woven: "true",
        lengthInYds: 2,
        widthInInches: 44,
        },
        {
        name: "Layered Watercolor Tropical Jersey Knit",
        woven: "false",
        lengthInYds: 1.5,
        widthInInches: 66,
        },
        {
        name: "Riley Blake Red Polka Dot",
        woven: "false",
        lengthInYds: 2,
        widthInInches: 60,
        },
        {
        name: "Plaid Flannel",
        woven: "true",
        lengthInYds: 3,
        widthInInches: 44,
        },
        {
        name: "Iris Crinkle Cotton",
        woven: "true",
        lengthInYds: 3.75,
        widthInInches: 52,
        },
        {
        name: "Red Ikat",
        woven: "true",
        lengthInYds: 3.25,
        widthInInches: 40,
        },
        {
        name: "Indigo Organic Cotton Rib Knit",
        woven: "false",
        lengthInYds: 2,
        widthInInches: 52,
        },
        {
        name: "Charcoal Grey Jersey",
        woven: "false",
        lengthInYds: 2.5,
        widthInInches: 54,
        },
]
await Material.insertMany(materials)
console.log('Created some materials!')
}

const run = async () => {
    await main()
    db.close()
}

run()