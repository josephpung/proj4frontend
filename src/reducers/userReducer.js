export default function reducer (state = {
    name: "",
    email: "",
    loggedIn: false

}, action) {
  switch (action.type) {
    case 'loginSuccess':{
      console.log("payload received ><><",action.payload);
      return state = {
        name: action.payload.name,
        email: action.payload.email,
        loggedIn: true
      }
    }
    case 'CHANGE_AGE':{
    return {...state, age: action.payload}
    }
    default :
    return {...state}
  }
}
