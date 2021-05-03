let counter = 0;


const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
const menuItem = document.querySelectorAll('.menu-item')
const year = document.getElementById('year')



slides.forEach(function(slide, index) {
    slide.style.left = `${index*35}%`
})

nextBtn.addEventListener('click', function(){
    counter++
    carousel();
})

prevBtn.addEventListener('click', function(){
    counter--
    carousel();
})

function carousel() {
    if (counter > 0) {
        prevBtn.style.display = 'block'
    } else {
        prevBtn.style.display = 'none'
    }

    if (counter < slides.length - 1) {
        nextBtn.style.display = 'block'
    } else {
        nextBtn.style.display = 'none'
    }
    
    slides.forEach(slide =>{
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}


menuItem.forEach(item => {

    item.addEventListener('click', () =>{
        
        menuItem.forEach(param => {
            param.classList.remove('active-menu')
        })

        item.classList.add('active-menu')
    })
})


const thisYear = new Date().getFullYear();

year.textContent = thisYear

