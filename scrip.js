let table = document.querySelector('.table');

let amountBoxes = 621;


for (let i = 0; i < amountBoxes; i++) {
    let box = document.createElement('div')
    box.classList.add('box');

    table.append(box)

    box.addEventListener('mouseenter', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))

}

let arr = ['pink', 'green', 'purple', 'yellow', 'red', 'blue']


function setColor(item) {
    item.style = `background: red;`
}

function removeColor(item) {
    item.style = `background: '';`
}