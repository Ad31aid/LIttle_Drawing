
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
        }

        function endPosition(e){
                painting = false
        }

        function draw(e){
                if(!painting) return;
                ctx.lineWidth = 10
                ctx.lineCap = 'round'

                ctx.lineTo(e.clientX, e.clientY)
                ctx.stroke()
                ctx.beginPath()
                ctx.moveTo(e.clientX,e.clientY)
        }
        
})


