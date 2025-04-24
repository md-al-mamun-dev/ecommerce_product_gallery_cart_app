import { createSlice } from "@reduxjs/toolkit";


const controlSlice = createSlice({
    name: "control",
    initialState: {
        showMiniCart: false,
        showWaiting: false,
    },
    reducers: {
        openMiniCart(state) {
            state.showMiniCart = true;
        },
        closeMiniCart(state) {
            state.showMiniCart = false;
        },
        toggleMiniCart(state) {
            state.showMiniCart = !state.showMiniCart;
        },

        openWaitingPopup(state){
            state.showWaiting = true;
        },
        closeWaitingPopup(state){
            state.showWaiting = false;
        }

    },

})

export const { openMiniCart, closeMiniCart, toggleMiniCart, openWaitingPopup, closeWaitingPopup } = controlSlice.actions;
export default controlSlice.reducer;