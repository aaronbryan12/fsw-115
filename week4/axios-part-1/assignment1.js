
console.log(axios)
axios.get("https://api.vschool.io/[aaronbrennan]/todo")
.then(res => buildList(res.data))
.catch(err => console.log(err))


function buildList(data){
    console.log(data)
}

