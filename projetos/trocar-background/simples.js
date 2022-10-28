const colors = ["red", "green", "grey", "brown", "rgb(120,52,155)"]

const botton = document.getElementById("btn")
const color = document.querySelector(".color")

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}

botton.addEventListener("click", function() {
    const colorNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[colorNumber]
    color.textContent = colors[colorNumber]
    console.log(colorNumber)
})