const url= "https://api.dictionaryapi.dev/api/v2/entries/en/hello"

const result = document.getElementById("result") 
const sound = document.getElementById("sound")
const btn = document.getElementById("search-btn")

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("input-word").value 
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        result.innerHTML = `<div class="word">
        <h3>Sample</h3>
        <button><i class="fa-solid fa-volume-high"></i></button>
    </div>
    <div class="details">
        <p>pos</p>
        <p>/sample/</p>
    </div>
    <div>
        <p class="word-meaning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et commodi eius eveniet. </p>
        <p class="word-example">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et commodi eius eveniet. 
        </p>`
    })
})