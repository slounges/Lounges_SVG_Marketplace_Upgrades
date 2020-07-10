

let iconSet = document.querySelectorAll('.svgIcon')

function whenClicked(EventObject) {
    let clickedIcon = EventObject.currentTarget;

    console.log(`the sticker you are adding to the cart is the: ${clickedIcon.id}`)


    clickedIcon.classList.toggle('selected')
    updateCount()
}

iconSet.forEach(function(icon) {
    icon.addEventListener('click', whenClicked, true)
})


function updateCount() {

    const countElement = document.querySelector('.count')
    countElement.dataset.count = document.querySelectorAll('.svgIcon.selected').length
    countElement.innerHTML = countElement.dataset.count
}