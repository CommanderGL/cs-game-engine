export class Sprite {
    constructor(pos, size, img) {
        this.img = document.createElement("img").src = img
        this.pos = pos
        this.size = size
    }

    render() {
        //console.log(ctx)
        ctx.drawImage(this.img, this.pos.x, this.pos.y, this.size.width, this.size.height)
    }
}

let ctx
let nodes
const engine = {
    constructor(canvas) {
        ctx = canvas.getContext("2d")
        nodes = []
        return engine
    },

    append_node(node) {
        nodes.push(node)
        return engine
    },
    
    render() {
        //console.log(nodes)
        nodes.forEach(node => {
            node.render(ctx)
        })

        window.requestAnimationFrame(engine.render)
    },
}
export default engine