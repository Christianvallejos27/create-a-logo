const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const{Circle, Square, Triangle}= require("./lib/shapes")
const SVG = require("./lib/svg")

function createlogo(filename,response){
    fs.writeFileSync(filenamegit,response)
}

function startlogo (){
inquirer.prompt([
    {
        type : "input",
        name : "letters",
        message : "enter text for your logo",
    },
    
    {
        type : "input",
        name : "lettercolor",
        message : "enter then color of your font",
    },
    {
        type : "input",
        name : "backgroundcolor",
        message : "enter the color for your shape",
    },
    {
        type : "list",
        name : "shape",
        message : "what shape would you like?",
        choices : ["Circle","Triangle","Square"]
    },
]).then((shaperesponse=>{
    let logo;
    switch(shaperesponse.shape){
        case "Circle":
            logo=new Circle()
            break;
        case "Triangle":
            logo=new Triangle()
            break;
        case "Square":
            logo=new Square()
            break;
    }
    logo.setColor(shaperesponse.backgroundcolor)
    const mySVG=new SVG()
    mySVG.setshape(logo)
    mySVG.settext(shaperesponse.letters,shaperesponse.lettercolor)
    shaperesponse.letters.length>3? console.log("must be less than three characters"):createlogo("logo.svg",mySVG.render())
}))
}

startlogo()