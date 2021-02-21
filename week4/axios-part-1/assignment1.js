axios.get("https://api.vschool.io/[aaronbrennan]/todo")
.then(res => buildList(res.data))
.catch(err => console.log(err))

axios.post("https://api.vschool.io/[aaronbrennan]/todo")

const todoForm = document.todoform

todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    axios.post("https://api.vschool.io/[aaronbrennan]/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    
}) 

function buildList(data){
    for (let i = 0; i < data.length; i++){
        console.log(data[i])
        const titleElement = document.createElement('h1')
        titleElement.textContent = data[i].title;
        document.body.appendChild(titleElement)
        // titleElement.classList.add("title")


        const descriptionElement = document.createElement('h2')
        descriptionElement.textContent = data[i].description
        document.body.appendChild(descriptionElement)

        const priceElement = document.createElement('h3')
        priceElement.textContent = data[i].price
        document.body.appendChild(priceElement)

        
        if (data[i].imgUrl){
            console.log(data[i].imgUrl)
            const srcElement = document.createElement('img')
            srcElement.src = data[i].imgUrl
            srcElement.classList.add("listimages")
            document.body.appendChild(srcElement)
        }

        let checkBox = document.createElement('input')
        document.body.appendChild(checkBox)

        let completedButton = document.createElement('button')
        completedButton.innerText = 'Completed';'Incompleted'
        completedButton.addEventListener ('click', submitComment)
        document.body.appendChild(completedButton)
        
        }
        let lineThrough = document.querySelectorAll('h1')
        lineThrough[1].classList.add("title")
}


function submitComment() {
    console.log ('completed')
} 
console.log(axios)