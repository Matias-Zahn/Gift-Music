import { createSlice } from "@reduxjs/toolkit";
import { axiosMusic } from "../../utils/configAxios";

const initialState= {
    name: "",
    email: "",
    token: "",
    isLoading: false,
    isRegister: false,
}

const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : initialState,
  reducers: {
    login: (state, action) => {
        const data= action.payload
        const newState= {...state, ...data}
        localStorage.setItem('userInfo', JSON.stringify(newState))
        return newState
    },
    logOut: (state) => {
      localStorage.removeItem('userInfo')
      return{...state, ...initialState}
    },
    setIsLoading:(state, action) => {
      state.isLoading = action.payload
    },
    setIsRegister:(state, action) => {
      state.isRegister = action.payload
    }
  },
});



export const {login, logOut, setIsLoading, setIsRegister} = userSlice.actions

export default userSlice.reducer;

export const loginThunk = (data) => (dispatch) =>{
  dispatch(setIsLoading(true))
    axiosMusic
      .post("/api/auth/login", data)
      .then(({data}) => {
        dispatch(login(data))
        dispatch(setIsRegister(true))
      })
      .catch(() => dispatch(setIsRegister(true)))
      .finally(() => dispatch(setIsLoading(false)))
}

