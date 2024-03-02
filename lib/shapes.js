class Shape {
    constructor(){
        this.color = ""
    }
    setColor(color){
        this.color = color
    }
}
class Square extends Shape {
    render () {
        return `<rect x="50" y="50"fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="150"fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="200,10 250,190 150,190" fill="${this.color}" />`
    }
}
module.exports={Square,Triangle,Circle}
