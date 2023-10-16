const db = require('../db')
const Pattern = require('../models/pattern')

db.on('error', console.error.bind(console, 'MongoDB connection error.'))

const main = async () => {
    const patterns = [
        {
            publisher: "McCalls",
            name_no: "M6751",
            description: "Misses' Tops and Pants",
            adultSize: true,
            woven_required: false,
        },
        {
            publisher: "Oliver + S",
            name_no: "2+2 Blouse + Pleated Skirt",
            description: "Kids Tops and Skirt",
            adultSize: false,
            woven_required: true,
        },
        {
            publisher: "Violette Field Threads",
            name_no: "Piper Top and Dress",
            description: "Kids Top and Dress",
            adultSize: false,
            woven_required: true,
        },
        {
            publisher: "Named Clothing",
            name_no: "Solina Dress, Jumpsuit, and Top",
            description: "Misses' Dress, Jumpsuit, and Top",
            adultSize: true,
            woven_required: true,
        },
        {
            publisher: "Little Lizard King",
            name_no: "Napoli",
            description: "Kids Dress",
            adultSize: false,
            woven_required: true,
        },
        {
            publisher: "Butterick",
            name_no: "B6681",
            description: "Misses' Dress",
            adultSize: true,
            woven_required: true,
        },
        {
            publisher: "Straightgrain",
            name_no: "Nova",
            description: "Kids Top and Dress",
            adultSize: false,
            woven_required: true,
        },
        {
            publisher: "Twig + Tale",
            name_no: "Fernway Culottes",
            description: "Misses' Pants",
            adultSize: true,
            woven_required: false,
        },
        {
            publisher: "Vogue",
            name_no: "V1743",
            description: "Misses' Dress",
            adultSize: true,
            woven_required: true,
        },
        {
            publisher: "True Bias",
            name_no: "Nikko Top & Dress",
            description: "Misses' Top and Dress",
            adultSize: true,
            woven_required: false,
        },
        {
            publisher: "Tilly and the Buttons",
            name_no: "Romy Top and Dress",
            description: "Misses' Top and Dress",
            adultSize: true,
            woven_required: false,
        },
        {
            publisher: "Simplicity",
            name_no: "S9223",
            description: "Misses' Dress",
            adultSize: true,
            woven_required: true,
        },
    ]
    await Pattern.insertMany(patterns)
    console.log("Created some patterns!")
}

const run = async () => {
    await main()
    db.close()
}

run()