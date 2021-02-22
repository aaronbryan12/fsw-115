
axios.get("https://api.vschool.io/[aaronbrennan]/todo")
.then(res => buildList(res.data))
.catch(err => console.log(err))

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

                if (data[i].completed){
                    console.log(data[i].completed)
                    let lineThrough = document.querySelectorAll('h1')
                    lineThrough[i].classList.add("title") 
                }

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
        completedButton.id = data[i]._id
        completedButton.addEventListener ('click', submitComment)
        document.body.appendChild(completedButton)
        
        const deleteButton = document.createElement('button')
        deleteButton.innerText = ' X ';
        deleteButton.id = data[i]._id
        document.body.appendChild(deleteButton)
        deleteButton.addEventListener("click", function(e){
        axios.delete("https://api.vschool.io/[aaronbrennan]/todo/"+e.target.id)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))})
     
        }
           
}

function submitComment(event) {
    let update = {
        completed:true
    }
    axios.put("https://api.vschool.io/[aaronbrennan]/todo/"+event.target.id, update)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
    console.log ('completed')
} 
console.log(axios)