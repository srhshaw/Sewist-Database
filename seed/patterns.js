const db = require('../db')
const Pattern = require('../models/pattern')

db.on('error', console.error.bind(console, 'MongoDB connection error.'))

const main = async () => {
    const patterns = [
        {
            publisher: "McCalls",
            name_no: "M6751",
            description: "Misses' Tops and Pants",
            adultSize: "True",
            woven_required: "False",
        },
        {
            publisher: "Oliver + S",
            name_no: "2+2 Blouse + Pleated Skirt",
            description: "Kids Tops and Skirt",
            adultSize: "False",
            woven_required: "True",
        },
        {
            publisher: "Violette Field Threads",
            name_no: "Piper Top and Dress",
            description: "Kids Top and Dress",
            adultSize: "False",
            woven_required: "True",
        },
        {
            publisher: "Named Clothing",
            name_no: "Solina Dress, Jumpsuit, and Top",
            description: "Misses' Dress, Jumpsuit, and Top",
            adultSize: "True",
            woven_required: "True",
        },
        {
            publisher: "Little Lizard King",
            name_no: "Napoli",
            description: "Kids Dress",
            adultSize: "False",
            woven_required: "True",
        },
        {
            publisher: "Butterick",
            name_no: "B6681",
            description: "Misses' Dress",
            adultSize: "True",
            woven_required: "True",
        },
        {
            publisher: "Straightgrain",
            name_no: "Nova",
            description: "Kids Top and Dress",
            adultSize: "False",
            woven_required: "True",
        },
        {
            publisher: "Twig + Tale",
            name_no: "Fernway Culottes",
            description: "Misses' Pants",
            adultSize: "True",
            woven_required: "False",
        },
        {
            publisher: "Vogue",
            name_no: "V1743",
            description: "Misses' Dress",
            adultSize: "True",
            woven_required: "True",
        },
        {
            publisher: "True Bias",
            name_no: "Nikko Top & Dress",
            description: "Misses' Top and Dress",
            adultSize: "True",
            woven_required: "False",
        },
        {
            publisher: "Tilly and the Buttons",
            name_no: "Romy Top and Dress",
            description: "Misses' Top and Dress",
            adultSize: "True",
            woven_required: "False",
        },
        {
            publisher: "Simplicity",
            name_no: "S9223",
            description: "Misses' Dress",
            adultSize: "True",
            woven_required: "True",
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