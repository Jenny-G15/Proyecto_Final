async function GetCards() {
    return new Promise (async(resolve,reject)=>{
        let response= await fetch("http://localhost:3000/products");
        if (response) {
            let products=response.json();
            return resolve(products)
        }
        else {
            reject (new Error("Invalido"))
        }
    })
}

export default GetCards;