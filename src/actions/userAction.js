import axios from 'axios'

export function login(data){
  return function (dispatch){

    axios.post("/authentication/login",{
        email: data.email,
        password: data.password
      })
      .then(res=>{
        dispatch({type: res.data.status, payload: res.data.userData})
        // console.log("response from server",res.data);
      })
  }
}

export function logout(){
  return function (dispatch){

    axios.get("/authentication/logout")
      .then(res=>{
        dispatch({type: res.data.status, payload: res.data.userData})
        // console.log("logout response from server",res.data);
      })
  }
}

// export function reloadUser(){
//   return function (dispatch){
//     axios.get("/currentUser")
//     .then(res=>{
//       dispatch({type: "loginSuccess", payload: res.data.user})
//     })
//
//   }
//
// }
