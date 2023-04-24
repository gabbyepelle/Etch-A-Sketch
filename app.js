const container = document.querySelector('.container')
const shake = document.querySelector('#shake')
const rows = document.querySelectorAll(".row")
const slider = document.querySelector('#range')
const size = document.querySelector('#grid-size')
const color = document.querySelector('#pen')
const eraser = document.querySelector('#eraser')
const rainbow = document.querySelector('#rainbow')


const createGrid = function(val){
    for(let i = 0; i< val; i++){
        const row = document.createElement("div")
        row.classList.add('row')
        container.appendChild(row)
        for(let i=0; i< val; i++){
            const div = document.createElement('div')
            div.classList.add('square')
            row.appendChild(div)
        }
    
    }
    const squares = document.querySelectorAll('.square')
    squares.forEach((item)=>{
        item.addEventListener('mouseover', ()=>{
            item.style.backgroundColor = color.value;
        })
    })
    size.textContent = `${slider.value} X ${slider.value}`;
}


shake.addEventListener('click', ()=>{
    const squares = document.querySelectorAll('.square')
    squares.forEach((item)=>{
        item.style.backgroundColor = "white"
    })
})

slider.oninput = function() {
    size.textContent = `${this.value} X ${this.value}`;
    //remove all divs inside of container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
   createGrid(this.value)
  }


eraser.addEventListener('click', ()=>{
    const squares = document.querySelectorAll('.square')
    squares.forEach((item)=>{
        item.addEventListener('mouseover', ()=>{
            item.style.backgroundColor = 'white'
        })
    })
})

color.addEventListener('click', ()=>{
    const squares = document.querySelectorAll('.square')
    squares.forEach((item)=>{
        item.addEventListener('mouseover', ()=>{
            item.style.backgroundColor = color.value;
        })
    })
})

rainbow.addEventListener('click', ()=>{
    const squares = document.querySelectorAll('.square')
    squares.forEach((item)=>{
        item.addEventListener('mouseover', ()=>{
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)


            item.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
        })
    })
})

createGrid(16)