let Stickers = document.querySelectorAll('.svgSticker')
function clickSticker(EventObject) {
    let clickedIcon = EventObject.currentTarget;
    console.log(`the sticker you are adding to the cart is the: ${clickedIcon.id}`)
    clickedIcon.classList.toggle('selected')
    countStickers()
}
Stickers.forEach(function(icon) {
    icon.addEventListener('click', clickSticker, true)
})
function countStickers() {
    const countElement = document.querySelector('.basket')
    countElement.dataset.count = document.querySelectorAll('.svgSticker.selected').length
    countElement.innerHTML = countElement.dataset.count
}