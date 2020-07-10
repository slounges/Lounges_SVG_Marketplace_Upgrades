let Stickers = document.querySelectorAll('.svgSticker')

function whenClicked(EventObject) {
    let clickedIcon = EventObject.currentTarget;
    console.log(`the sticker you are adding to the cart is the: ${clickedIcon.id}`)
    clickedIcon.classList.toggle('selected')
    updateCount()
}

Stickers.forEach(function(icon) {
    icon.addEventListener('click', whenClicked, true)
})


function updateCount() {
    const countElement = document.querySelector('.count')
    countElement.dataset.count = document.querySelectorAll('.svgSticker.selected').length
    countElement.innerHTML = countElement.dataset.count
}