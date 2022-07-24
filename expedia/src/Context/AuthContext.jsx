import { createContext,  useReducer } from "react";

export const AuthContext=createContext()
export const appReducer=(state,action)=>{
    switch (action.type){
        case "LOGIN_SUCCESS":{
            return {
                ...state,isAuth:true
            }
        }
        case "LOGOUT_SUCCESS":{
            return{
                ...state,isAuth:false
            }
        }
        default: return state
    }
}
function AuthContextProvider({children}){
    const [state,dispatch]=useReducer(appReducer,{
        isAuth:false
    })
    return (
        <AuthContext.Provider value={[state,dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider