var canvas = document.querySelector('#draw')

var ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight; 
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 100;


let drawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true;

function draw(e){
    if(!drawing) return;
    console.log(e)
    ctx.strokeStyle = `hsl(${hue},100%,50%)`
    
    ctx.beginPath()
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    hue++;
    if(hue >= 300){
        hue = 0
    }
    if (ctx .lineWidth >= 100 || ctx.lineWidth <= 1)[
        direction =!direction
    ]
    if(direction){
        ctx.lineWidth++

    }else {
        ctx.lineWidth--;


    }
}
canvas.addEventListener('mousedown',(e) => {
    drawing = true;
    lastX = e.offsetX
    lastY = e.offsetY
})
canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mouseup', ()=> drawing =false)
canvas.addEventListener('mouseout',()=> drawing = false)
