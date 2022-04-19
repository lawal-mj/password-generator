let styleLine = document.getElementById("styles")
// console.log(styleLine.outerHTML)

function darkMode() {
    styleLine.innerHTML = '<link id="styles" rel="stylesheet" href="./styles/dark.css">'
}

function lightMode() {
    styleLine.innerHTML = '<link id="styles" rel="stylesheet" href="./styles/light.css">'  
}