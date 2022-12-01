import engine, { Sprite } from '../index.js'

const sprite = new Sprite({ x: 10, y: 10 }, { width: 100, height: 100 }, './Sqaure.png')

const app = engine.constructor(document.querySelector("#canvas"))
app.append_node(sprite)
window.requestAnimationFrame(app.render)