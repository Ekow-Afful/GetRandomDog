console.log("hello")
//https://dog.ceo/api/breeds/image/random
// .then - promises
// asynchronous programmming

const dogImageDiv = document.getElementById("dogImage")
const dogButton = document.getElementById("dogButton")


const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(json => {
  console.log(json.message)
  dogImageDiv.innerHTML = `<img src="${json.message}" height=200 width=200/>`
})
}

dogButton.onclick = () => getNewDog()