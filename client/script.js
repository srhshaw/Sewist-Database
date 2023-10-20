
const BASE_URL = "http://localhost:3001";
const stashCollection = document.getElementById("table-container");

//UPDATE FORM DOM VARIABLES
const matUpdateDesc = document.getElementById("editDescription");          
const matUpdateWoven = document.getElementById("woven");
const matUpdateLength = document.getElementById("lengthInYds")
const matUpdateWidth = document.getElementById("widthInInches");

let stashString = "";
let materials = "";
let selectedRecord ="";

//HIDE 'GET ALL','CREATE NEW', & 'EDIT' PAGE HTML
document.querySelector(".getAll").style.display = "none"
document.querySelector(".createNewMaterialForm").style.display = "none"
document.querySelector(".edit").style.display = "none"
document.querySelector(".home").style.display = "block"

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

document.querySelector("#navBar").onclick = function(e) {
    let navChoice = e.target.id
    console.log(navChoice)
    clearStashCollectionHTML()
    if(navChoice === "materialsNav"){
        getAllMaterialsPage("materials")
    } else if (navChoice === "patternsNav") {
        getAllPatternsPage("patterns")
    } else {
        getAllProjectsPage("projects")
    }
}

function clearStashCollectionHTML() {
    document.getElementById("table-container").innerHTML = ""
}

//GET ALL PATTERNS
function getAllPatternsPage(path) {

    //HIDE HOMEPAGE,EDIT, & CREATE NEW RECORD HTML
    document.querySelector(".home").style.display = "none"
    document.querySelector(".edit").style.display = "none"
    document.querySelector(".createNewMaterialForm").style.display = "none"

    //DISPLAY 'GET ALL' HTML
    document.querySelector(".getAll").style.display = "block"

    //PLACE AXIOS CALL TO DB TO RETRIEVE USER-SELECTED (PATTERN) RECORDS
    getRecords(path)
    async function getRecords(route) {
        let records = await axios.get(`${BASE_URL}/${route}`)
        console.log(records)

        //LOOP OVER PATTERN RECORDS.DATA ARRAY. DISPLAY EACH RECORD'S PROPERTIES USEFUL TO USER BY INSERTING INTO HTML.
        stashString = ""
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
                    <tr>
                        <td><button>Edit</button></td>
                    </tr>
                </table>`
            stashCollection.innerHTML = stashString
        })
    }
}

//GET ALL MATERIALS
function getAllMaterialsPage(path) {

    //HIDE HOMEPAGE, 'EDIT', &'CREATE NEW' HTML
    document.querySelector(".home").style.display = "none"
    document.querySelector(".edit").style.display = "none"
    document.querySelector(".createNewMaterialForm").style.display = "none"

    //DISPLAY 'GET ALL' HTML
    document.querySelector(".getAll").style.display = "block"

    //PLACE AXIOS CALL TO DB TO RETRIEVE USER-SELECTED (MATERIALS) RECORDS
    getRecords(path)
    async function getRecords(route) {
        materials = await axios.get(`${BASE_URL}/${route}`)
 
        //LOOP OVER MATERIALS RECORDS.DATA ARRAY. DISPLAY EACH RECORD'S PROPERTIES USEFUL TO USER BY INSERTING INTO HTML.
        stashString = ""
        materials.data.forEach(record => {
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
                    <tr>
                        <td><button id = ${record._id}>Edit</button></td>
                    </tr>
                </table>`
            stashCollection.innerHTML = stashString
        })
    return materials
    }
}
    //EVENT LISTENER ON 'ADD NEW' BUTTON
    document.querySelector("#getAll_add_button").onclick = 
        function createNewMaterial() {

        //HIDE HOMEPAGE, EDIT, & 'GET ALL' HTML
        document.querySelector(".home").style.display = "none"
        document.querySelector(".getAll").style.display = "none"
        document.querySelector(".edit").style.display = "none"

        //DISPLAY 'CREATE NEW' HTML
        document.querySelector(".createNewMaterialForm").style.display = "block"
        }

        //NEW RECORD DATA IS INPUT & SEND TO DB VIA HTML FORM.  BELOW EVENT LISTENER CONFIRMS RECORD CREATED IN BROWSER AND RETURNS TO 'GET ALL' PAGE HTML.
        document.querySelector("#create_material").onclick = function confirmCreate() {
            alert("Record created.")

            document.querySelector(".getAll").style.display = "block"
            document.querySelector(".home").style.display = "none"
            document.querySelector(".edit").style.display = "none"
            document.querySelector(".createNewMaterialForm").style.display = "none"
        }

     //EVENT LISTENER ON MATERIALS TABLES DIV TO RECORD ID OF MATERIAL RECORD CLICKED BY USER
    document.querySelector(`#table-container`).onclick = function(e) {
        console.log("click")
        let lastClickedRecordId = e.target.id
        console.log(lastClickedRecordId)

        //VARIABLE WILL NOT HOLD THE RECORD ID DUE TO EVENT LISTENER ELEMENT ID CONFLICTS WHICH CANNOT BE RESOLVED WITHOUT DETRIMENT.  THIS FUNCTION USES THE VARIABLE TO FIND THE RECORD MATCHING THE ID FOR USE IN THE CODE.  
        materials.data.forEach(record => {
            if (record._id === lastClickedRecordId) {
                selectedRecord =record
                return selectedRecord
            }
        })

        //HIDE HOMEPAGE, EDIT & 'GET ALL' HTML
        document.querySelector(".home").style.display = "none"
        document.querySelector(".getAll").style.display = "none"
        document.querySelector(".createNewMaterialForm").style.display = "none"

        //DISPLAY 'UPDATE/DELETE' HTML
        document.querySelector(".edit").style.display = "block"

        //POPULATE EXISTING DOCUMENT DATA TO BROWSER FOR USER EDITING
        matUpdateDesc.innerText = selectedRecord.name
        matUpdateWoven.innerText = selectedRecord.woven
        matUpdateLength.innerText = selectedRecord.lengthInYds
        matUpdateWidth.innerText = selectedRecord.widthInInches

        //EVENT LISTENER ON UPDATE FORM "SUBMIT UPDATE" BUTTON
        document.querySelector("#submitUpdate").onclick = function submitUpdate(){

            //VARIABLE TO SAVE THE UPDATED INNER HTML TEXT IN OBJECT FORMAT REQUIRED BY AXIOS PUT CALL
            let matDocUpdate = {
                name: `${matUpdateDesc.innerText}`,
                woven: `${matUpdateWoven.innerText}`,
                lengthInYds: `${matUpdateLength.innerText}`,
                widthInInches: `${matUpdateWidth.innerText}`,
            }

            //FUNCTION TO MAKE AXIOS PUT CALL PASSING IN THE RECORD(ID) AND VARIABLE HOLDING VALUES TO UPDATE
            updateDocument(selectedRecord, matDocUpdate);
            async function updateDocument(record, updateObject) {
                await axios.put(`${BASE_URL}/materials/${record._id}`, updateObject)}
                alert("Update confirmed.")

                //SHOW GET ALL PAGE HTML.  HIDE HOMEPAGE, EDIT & 'GET ALL' HTML.
                document.querySelector(".getAll").style.display = "block"
                document.querySelector(".edit").style.display = "none"
                document.querySelector(".home").style.display = "none"
                document.querySelector(".createNewMaterialForm").style.display = "none"

                getAllMaterialsPage("materials")
        }

        //EVENT LISTENER FOR DELETE BUTTON.  SENDS CONFIRMATION POPUP.  IF CONFIRMED, EXECUTES AXIOS DELETE CALL PASSING IN RECORD(ID).
        document.querySelector("#delete").onclick = function deleteRecord(){
            if (confirm("Are you sure you want to delete this record?")){
                deleteDocument(selectedRecord)
                async function deleteDocument(record) { 
                    await axios.delete(`${BASE_URL}/materials/${record._id}`)}
                
                //SHOW GET ALL PAGE HTML.  HIDE HOMEPAGE, EDIT & 'GET ALL' HTML.
                document.querySelector(".edit").style.display = "none"
                document.querySelector(".home").style.display = "none"
                document.querySelector(".createNewMaterialForm").style.display = "none"
                document.querySelector(".getAll").style.display = "block"

                getAllMaterialsPage("materials")
            }
        }
    }

//GET ALL PROJECTS
function getAllProjectsPage(path) {

    //HIDE HOMEPAGE HTML
    document.querySelector(".home").style.display = "none"
    document.querySelector(".edit").style.display = "none"
    document.querySelector(".createNewMaterialForm").style.display = "none"

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
        stashString = ""
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
                    <tr>
                        <td><button>Edit</button></td>
                    </tr>
                </table>`
                stashCollection.innerHTML = stashString
            }}
        })
    }
}