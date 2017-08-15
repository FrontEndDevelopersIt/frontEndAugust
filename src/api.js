// return {
//     post,
//     get,
//     put,
//     delete
// };
// const ERROR = 'error'
// function post(url, params) {
//     axios.post(url, params)
//         .then(response => {
//             if (response.data.error) {
//                 reject(error)
//             }
//         }).catch(error => {
//         notificationService.pushNotification({
//             type: ERROR,
//             text: error.message,
//             timeout: 100
//         })
//     })
// }
import axios from 'axios'

function postData(url, params) {
    let msg = '';
    axios.post(url, params).then(response =>{
            // if(response.status >= 400 && response.status <=500)
            // {
            //     reject(error);
            // }
            console.log(response);
        }).catch(error =>{
            // switch (error.status){
            //     case(401) : msg = 'Wrong password'; break;
            //     case(403) : msg = 'Account was not activated'; break;
            //     case(404) : msg = 'Wrong email'; break;
            //     case(422) : msg = 'Invalid user data'; break;
            //     case(500) : msg = 'Undeclared error'; break;
            // }

        }
    );
    return msg;
}

function getData(url, params)
{
//    let msg = '';
    axios.get(url, params).then(response=>{

    }).catch(error=>{

    }
    );
}

export  default {
    postData,
    getData
}