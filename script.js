
        //can use instant call function?
        // (function(){}) it runs as soon as it's defined


        //scopting differnce of arrow function?

window.addEventListener('load', ()=>{
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d')
        //I think these are the default setting stuff

        canvas.height = window.innerHeight
        canvas.width = window.innerWidth
        //setting size of the canvas

        let painting = false;

        function startingPosition(e){
                painting = true;  
                draw(e)
                console.log('yep') 
                }

        function endPosition(e){
                painting = false
                ctx.beginPath()
                // I don't understand why does that help
        }

        function draw(e){
                if(!painting) return;
                ctx.lineWidth = 10
                ctx.lineCap = 'round'

                ctx.lineTo(e.clientX, e.clientY)
                ctx.stroke()
                //path of line?
                ctx.beginPath()
                //beginPath I guess
                ctx.moveTo(e.clientX,e.clientY)
        }

        canvas.addEventListener('mousedown', startingPosition)
        canvas.addEventListener('mouseup',  endPosition )
        canvas.addEventListener('mousemove', draw)

})
//basic canvas drawing function
console.log(canvas)
//genrate tool bar
let toolbar_show = () => {
        const toolbar_frame = document.createElement('div')
        toolbar_frame.classList.add = 'toolbar'
        console.log(canvas)
        const body = document.querySelector('body')
        console.log(body)
        body.appendChild(toolbar_frame)
}

function toolbar_hide(){
}

toolbar_show()


let button_gen = () =>{
        let button = document.createElement('button')
        
}