
        //can use instant call function?
        // (function(){}) it runs as soon as it's defined


        //scopting differnce of arrow function?

window.addEventListener('load', ()=>{
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d')

        //I think these are the default setting stuff

        canvas.height = 700
        canvas.width = 700
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
        let color

        function draw(e){
                if(!painting) return;
                ctx.lineWidth = 10
                ctx.lineCap = 'round'

                ctx.lineTo(e.clientX, e.clientY)
                ctx.stroke()
                ctx.strokeStyle = color
                //path of line?
                ctx.beginPath()
                //beginPath I guess
                ctx.moveTo(e.clientX,e.clientY)
        }

        canvas.addEventListener('mousedown', startingPosition)
        canvas.addEventListener('mouseup',  endPosition )
        canvas.addEventListener('mousemove', draw)

        //genrate tool bar

        const toolbar_frame = document.createElement('div')
        toolbar_frame.classList.add = 'toolbar'
        console.log(canvas)
        const body = document.querySelector('body')
        console.log(body)
        body.appendChild(toolbar_frame)
        
        const color_set = ['black','red','yellow','blue','purple','green']
        
        for(let i = 0; i < color_set.length; i++){
                let button = document.createElement('button')
                toolbar_frame.appendChild(button)
                button.innerHTML = color_set[i]
                button.setAttribute('id',color_set[i])
                button.addEventListener('click', () => {
                        color = color_set[i]
                })
        }
}
)




