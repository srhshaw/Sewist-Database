
const BASE_URL = "http://localhost:3001";
const stashCollection = document.getElementById("table-container");

let stashString = "";

document.querySelector(".getAll").style.display = "none"

document.querySelector(".home-image-container").onclick = function(e) {
    let pathChosen = e.target.id
    console.log(pathChosen)
    if(pathChosen === "materials") {
        getAllMaterialsPage(pathChosen)
    } else if (pathChosen === "patterns") {
        getAllPatternsPage(pathChosen)
    } else {
        getAllProjectsPage(pathChosen)
    }
}

function getAllPatternsPage(path) {
    console.log(path);
//NEED HOMEPAGE HTML TO GO HIDDEN
    document.querySelector(".home").style.display = "none"

//NEED GETALL HTML TO GO UNHIDDEN
    document.querySelector(".getAll").style.display = "block"

//NEED TO MAKE AXIOS CALL TO DB TO RETRIEVE E.TARGET.ID RECORDS
    getRecords(path)
    async function getRecords(route) {
        let records = await axios.get(`${BASE_URL}/${route}`)
        console.log(records)

//DISPLAY RECORDS BY ADDING TO HTML.  WORK ON CSS.
        records.data.forEach(record => {
            console.log(record)
            stashString +=
                `<table class = "records_data">
                    <tr>
                        <td> <b>Publisher:</b> </td>
                        <td> ${record.publisher} </td>
                    </tr>
                    <tr>
                        <td> <b>Name/No.:</b> </td>
                        <td> ${record.name_no} </td>
                    </tr>
                    <tr>
                        <td> <b>Description:</b> </td>
                        <td> ${record.description} </td>
                    </tr>
                    <tr>
                        <td> <b>Adult Sizing:</b> </td>
                        <td> ${record.adultSize} </td>
                    </tr>
                    <tr>
                        <td> <b>Wovens Required:</b> </td>
                        <td> ${record.woven_required} </td>
                    </tr>
                </table>`
            stashCollection.innerHTML = stashString
        })
    }
}

function getAllMaterialsPage(path) {
    console.log(path);
//NEED HOMEPAGE HTML TO GO HIDDEN
    document.querySelector(".home").style.display = "none"

//NEED GETALL HTML TO GO UNHIDDEN
    document.querySelector(".getAll").style.display = "block"

//NEED TO MAKE AXIOS CALL TO DB TO RETRIEVE E.TARGET.ID RECORDS
    getRecords(path)
    async function getRecords(route) {
        let records = await axios.get(`${BASE_URL}/${route}`)
        console.log(records)

//DISPLAY RECORDS BY ADDING TO HTML.  WORK ON CSS.
        records.data.forEach(record => {
            console.log(record)
            stashString +=
                `<table class = "records_data">
                    <tr>
                        <td> <b>Description:</b> </td>
                        <td> ${record.name} </td>
                    </tr>
                    <tr>
                        <td> <b>Woven:</b> </td>
                        <td> ${record.woven} </td>
                    </tr>
                    <tr>
                        <td> <b>Length (yds):</b> </td>
                        <td> ${record.lengthInYds} </td>
                    </tr>
                    <tr>
                        <td> <b>Width (inches):</b> </td>
                        <td> ${record.adultSize} </td>
                    </tr>
                </table>`
            stashCollection.innerHTML = stashString
        })
    }
}

function getAllProjectsPage(path) {
    console.log(path);
//NEED HOMEPAGE HTML TO GO HIDDEN
    document.querySelector(".home").style.display = "none"

//NEED GETALL HTML TO GO UNHIDDEN
    document.querySelector(".getAll").style.display = "block"

//NEED TO MAKE AXIOS CALL TO DB TO RETRIEVE E.TARGET.ID RECORDS
    getRecords(path)
    async function getRecords(route) {
        let records = await axios.get(`${BASE_URL}/${route}`)
        let materialsRecords = await axios.get(`${BASE_URL}/materials`)
        
        console.log(records)
        console.log(materialsRecords)

//DISPLAY RECORDS BY ADDING TO HTML.  WORK ON CSS.
        records.data.forEach(record => {
            console.log(record)
            let id = (`${record.material}`)
            const materialObject = materialsRecords.data.find((element) => element._id === id)
            if (materialObject) { 
            let materialName = materialObject.name
            stashString +=
                `<table class = "records_data">
                    <tr>
                        <td> <b>Name:</b> </td>
                        <td> ${record.name} </td>
                    </tr>
                    <tr>
                        <td> <b>Pattern:</b> </td>
                        <td> ${record.pattern} </td>
                    </tr>
                    <tr>
                        <td> <b>Material:</b> </td>
                        <td> ${materialName} </td>
                    </tr>
                </table>`
            stashCollection.innerHTML = stashString
            }
        })
    }
}