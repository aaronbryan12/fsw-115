
const xhr= newXMLHttpsRequest()

xhr.onreadystatechange= function(){
    if (xhr.readyState === 4 && xhr.status === 200)
}

xhr.open(GET, "https://api.vschool.io/[aaronbrennan]/todo", true)
xhr.send()

console.log(function);

