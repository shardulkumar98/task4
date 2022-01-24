// getData = ()=>{
//     url = "http://dummy.restapiexample.com/api/v1/employees";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }

// getData();

const axios = require('axios');
function getRequest(path) {
    axios.get(path).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        }
    );
}
getRequest('http://dummy.restapiexample.com/api/v1/employees');