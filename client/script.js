
const BASE_URL = "http://localhost:3001";
const stashCollection = document.getElementById("table-container");

let stashString = "";

//HIDE 'GET ALL' & 'CREATE NEW' PAGE HTML
document.querySelector(".getAll").style.display = "none"
document.querySelector(".createNewMaterialForm").style.display = "none"

//EVENT LISTENER TO RECORD USER-SELECTED PATH AND CALL THAT PATH'S FUNCTION
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

//GET ALL PATTERNS
function getAllPatternsPage(path) {
    console.log(path);
    //HIDE HOMEPAGE HTML
    document.querySelector(".home").style.display = "none"

    //DISPLAY 'GET ALL' HTML
    document.querySelector(".getAll").style.display = "block"

    //PLACE AXIOS CALL TO DB TO RETRIEVE USER-SELECTED (E.TARGET.ID) RECORDS
    getRecords(path)
    async function getRecords(route) {
        let records = await axios.get(`${BASE_URL}/${route}`)
        console.log(records)

        //LOOP OVER PATTERN RECORDS.DATA ARRAY. DISPLAY EACH RECORD'S PROPERTIES USEFUL TO USER BY INSERTING INTO HTML.
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

//GET ALL MATERIALS
function getAllMaterialsPage(path) {
    console.log(path);

    //HIDE HOMEPAGE & 'CREATE NEW' HTML
    document.querySelector(".home").style.display = "none"

    //DISPLAY 'GET ALL' HTML
    document.querySelector(".getAll").style.display = "block"

    //PLACE AXIOS CALL TO DB TO RETRIEVE USER-SELECTED (E.TARGET.ID) RECORDS
    getRecords(path)
    async function getRecords(route) {
        let records = await axios.get(`${BASE_URL}/${route}`)
        console.log(records)

        //LOOP OVER MATERIALS RECORDS.DATA ARRAY. DISPLAY EACH RECORD'S PROPERTIES USEFUL TO USER BY INSERTING INTO HTML.
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
                        <td> ${record.widthInInches} </td>
                    </tr>
                </table>`
            stashCollection.innerHTML = stashString
        })
    }
}
    //EVENT LISTENER ON 'ADD NEW' BUTTON
    document.querySelector("#getAll_add_button").onclick = 
        function createNewMaterial() {

        //HIDE HOMEPAGE & 'GET ALL' HTML
        document.querySelector(".home").style.display = "none"
        document.querySelector(".getAll").style.display = "none"

        //DISPLAY 'CREATE NEW' HTML
        document.querySelector(".createNewMaterialForm").style.display = "block"
        }


        //**TESTING HOW FORM RECORDS INPUTS */
        // let descInput = document.getElementById('desc')
        // let wovenInput = document.getElementById('material_type')
        // let lengthInput = document.getElementById('length')
        // let widthInput = document.getElementById('width')
        // document.querySelector('form.new_records_data_input').addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     console.log(descInput.value)
        //     console.log(wovenInput.value)
        //     console.log(lengthInput.value)
        //     console.log(widthInput.value)
        // })
        
        // document.querySelector("#create_material").onclick =
        //     function sendNewMaterialInput(){
        //         console.log()
        //     }
            

    
     //EVENT LISTENER ON MATERIALS TABLE
     //document.querySelector(".records_data").style.color="red"
     // document.querySelector(".records_data").onclick = function(e) {
     //     console.log("click")
         // let materialIdChosen = e.target
         // console.log(materialIdChosen)
     // }



//GET ALL PROJECTS
function getAllProjectsPage(path) {
    console.log(path);

    //HIDE HOMEPAGE HTML
    document.querySelector(".home").style.display = "none"

    //DISPLAY 'GET ALL' HTML
    document.querySelector(".getAll").style.display = "block"

    //PLACE AXIOS CALL TO DB TO RETRIEVE USER-SELECTED (E.TARGET.ID) RECORDS
    getRecords(path)
    async function getRecords(route) {
        let records = await axios.get(`${BASE_URL}/${route}`)
        let materialsRecords = await axios.get(`${BASE_URL}/materials`)
        let patternsRecords = await axios.get(`${BASE_URL}/patterns`)
        
        console.log(records)
        console.log(materialsRecords)

        //LOOP OVER PROJECTS RECORDS.DATA ARRAY. DISPLAY EACH RECORD'S PROPERTIES USEFUL TO USER BY INSERTING INTO HTML.
        records.data.forEach(record => {
            console.log(record)

            //FUNCTIONS TO RETRIEVE PATTERN & MATERIAL NAMES FOR DISPLAY BY THE OBJECT ID'S STORED IN THE PROJECT DOCUMENTS
            let patternId = (`${record.pattern}`)
            let materialId = (`${record.material}`)
            
            const patternObject = patternsRecords.data.find((element) => element._id === patternId)
            if (patternObject) { 
            let patternName = patternObject.name_no

            const materialObject = materialsRecords.data.find((element) => element._id === materialId)
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
                        <td> ${patternName} </td>
                    </tr>
                    <tr>
                        <td> <b>Material:</b> </td>
                        <td> ${materialName} </td>
                    </tr>
                </table>`
            stashCollection.innerHTML = stashString
            }}
        })
    }
}