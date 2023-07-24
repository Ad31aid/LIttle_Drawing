
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
        let pen_width
        function draw(e){
                if(!painting) return;
                ctx.lineWidth = pen_width
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
        toolbar_frame.classList.add ('toolbar')
        const body = document.querySelector('body')
        console.log(body)
        body.appendChild(toolbar_frame)
        
        const color_set = ['black','red','yellow','blue','purple','green']
        
        let color_name = document.createElement('H2')
        color_name.innerHTML = 'Color'
        toolbar_frame.appendChild(color_name)

        for(let i = 0; i < color_set.length; i++){
                let button = document.createElement('button')
                toolbar_frame.appendChild(button)
                button.innerHTML = color_set[i]
                button.setAttribute('id',color_set[i])
                button.addEventListener('click', () => {
                        color = color_set[i]
                })
        }

        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value; // Display the default slider value

        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
                pen_width = slider.value
        output.innerHTML = this.value;
        console.log(this)
        }// slider for pen width

        let shapeTool_container = document.createElement('div')
        toolbar_frame.appendChild(shapeTool_container)
        let shapeTool_Name = document.createElement('h2')
        shapeTool_container.appendChild(shapeTool_Name)
        shapeTool_Name.innerHTML = 'ShapeTool'
        let lineTool_button = document.createElement('button')  
        shapeTool_container.appendChild(lineTool_button)
        lineTool_button.classList.add('lineTool')
        lineTool_button.innerHTML ="LineTool"     

        lineTool_button.addEventListener('click',()=>{
                console.log('lineTool on')
        })




}
)




