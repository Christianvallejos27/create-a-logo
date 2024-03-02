class SVG {
    constructor(){
        this.textelement=""
        this.shapeelement=""
    }
    render(){
        return`<svg height="220" width="500">${this.shapeelement}${this.textelement}</svg>`
    }
    settext(text,color){
    this.textelement=`<text fill="${color}>${text}</text>`
    } 
    setshape(shape){
        this.shapeelement=shape.render
    }
}

module.exports=SVG