import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import playListCartSlice from "./slices/playListCart.slice";

export default configureStore({
    reducer: {
        user: userSlice,
        playListCart: playListCartSlice,
    },
})