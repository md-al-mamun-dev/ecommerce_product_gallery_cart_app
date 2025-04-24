import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";
import controlReducer from "./features/control/controlSlice";
import userInforeducer from "./features/userInfo/userInfoSlice"
import { persistReducer, persistStore } from 'redux-persist';
import  IndexedDBStorage  from 'redux-persist-indexeddb-storage';

const storage = new IndexedDBStorage('cartDB');
const persistConfig = {
  key: "cart",
  storage,
  blacklist: ["currentItemQuentity", "orderRequest"],
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer);


export const store = configureStore({
  reducer: {
    control: controlReducer,
    product: productReducer,
    cart: persistedCartReducer,
    userInfo: userInforeducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: { ignoreActions: ['persist/PERSIST', "persist/PERSIST"] },
  }),
});


export const persistor = persistStore(store);
