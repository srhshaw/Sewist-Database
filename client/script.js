
document.querySelector('.image-container').onclick = function(e) {
    console.log(e.target.id)
    let pathChosen = e.target.id
    return pathChosen
}


//ACTUALLY DON'T THINK I NEED TO DO THIS- CAN WRAP HTML IMG TAGS IN ANCHOR <a> TAGS WITH A LINK OR RELATIVE FILE PATH 
// function routePath(pathChosen) {
//     if (pathChosen === "materials") {
//     // GO TO MATERIALS INDEX ROUTE PAGE, RUN getAllMaterials ROUTE
//     } else if (pathChosen = "patterns") {
//     // GO TO PATTERNS INDEX ROUTE PAGE, RUN getAllPatterns ROUTE
//     } else {
//     // GO TO PROJECTS INDEX ROUTE PAGE, RUN getAllProjects ROUTE    
//     }
// }