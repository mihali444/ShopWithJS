function calcCartPrice() {


    const cartItems = document.querySelectorAll('.cart-item')
    const totalPriceEl = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDeliveryEEl = document.querySelector('[data-cart-delivery]')
    

    let totalPrice = 0

    cartItems.forEach(function(item){

        const amountEl = item.querySelector('[data-counter]').innerText
        const priceEl = item.querySelector('.price__currency').innerText

        const currentPrice = parseInt(amountEl) * parseInt(priceEl)

        totalPrice += currentPrice

    })

    totalPriceEl.innerText = totalPrice

    if (totalPrice > 0) {
        cartDeliveryEEl.classList.remove('none')
    } else {
        cartDeliveryEEl.classList.add('none')
    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'Бесплатно'
    } else {
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250 р'
    }


    
}