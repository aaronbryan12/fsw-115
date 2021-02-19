
axios.get("https://api.vschool.io/[aaronbrennan]/todo")
.then(res => buildList(res.data))
.catch(err => console.log(err))


function buildList(data){
    for (let i = 0; i < data.length; i++){
        console.log(data[i])
        const titleElement = document.createElement('h1')
        titleElement.textContent = data[i].title;
        document.body.appendChild(titleElement)

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
            document.body.appendChild(srcElement)
        }

        let checkBox = document.createElement('input')
    }

}
console.log(axios)