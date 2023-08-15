const minusBtn = document.querySelector('[data-action="minus"]')
const plusBtn = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')

minusBtn.addEventListener('click', function(){
    if ( parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText
    } 
    
})

plusBtn.addEventListener('click', function(){
    counter.innerText = ++counter.innerText
})


