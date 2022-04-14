const button = document.querySelector(`button`)

const buttonClicked = () => {
    axios.get("https://swapi.dev/api/planets/2/").then(res => {
        let resident = res.data.residents
        // console.log(res)
        for (let i = 0; i < resident.length; i++){
            axios.get(`${resident[i]}`).then(res => {
                let residentName = document.createElement("h2")
                residentName.innerText = res.data.name
                document.body.appendChild(resident)
            })
        }
    })
    console.log('Button clicked')
}

button.addEventListener('click', buttonClicked)



// function makeGetRequest(path) {
//     axios.get(path).then(
//         (response) => {
//             var result = response.data;
//             console.log(result);
//         },
//         (error) => {
//             console.log(error);
//         }
//     );
// }
// makeGetRequest('