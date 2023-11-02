import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic } from "../../utils/configAxios";

const initialState={
        name:"",
        email:"",
        token:""
}

const userSlice=createSlice({
    name:"user",
    initialState: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")): initialState,
    reducers:{
        login: (state, action)=>{
            const data= action.payload
            //!esta es una forma
            //TODO es este caso es= traeme las propiedades de state que sn name email etc
            //todo y sobre escribelas con los datos de data que son los que llegan cuando inicia el login y si se agrega una nueva key con value no se hay que cambiar o agregar como en la otra forma a continuación

            //TODO que persista la sesion abierta
            const newState={...state, ...data}
            localStorage.setItem("userInfo", JSON.stringify(newState))
            return newState

            //!esta es otra forma
           /*  state.name=data.name
            state.email=data.email
            state.token=data.token */
        },
        logOut:()=>{
            localStorage.removeItem("userInfo")
            return initialState
        }
    }
}) 

export const {login, logOut}=userSlice.actions

export default userSlice.reducer

export const loginThunk=(data)=>(dispatch)=>{
    axiosMusic
      .post("/api/auth/login", data)
      .then(({data})=>dispatch(login(data)))
      .catch((err)=>console.log(err)) 
}