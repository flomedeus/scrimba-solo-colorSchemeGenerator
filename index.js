
const colorForm = document.getElementById("color-form")

colorForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const colorSeed = document.getElementById("color-seed").value.slice(-6)
    const palette = document.getElementById("palette").value
    const inputUrl =  "https://www.thecolorapi.com/scheme?" + `hex=${colorSeed}&mode=${palette}`
    fetch(inputUrl)
        .then(response => response.json())
        .then(data => updateColors(data.colors))

})

document.addEventListener("click", (e)=>{
    if(e.target.dataset.hex){
        navigator.clipboard.writeText(e.target.dataset.hex);
        alert("HEX code copied to clipboard")
    }
})

function updateColors(colorsArray){
    document.getElementById("colors-grid").classList.remove("hidden")

    colorsArray.forEach((color,index) =>{
        document.getElementById(`color-${index+1}`).style.backgroundColor = color.hex.value
        document.getElementById(`hex-${index+1}`).innerHTML = `<p data-hex="${color.hex.value}">${color.hex.value}</p>`
    })
}