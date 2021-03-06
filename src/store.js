import { configureStore } from '@reduxjs/toolkit';
import adminUserReducer from './pages/admin-user/userSlice.js';
import categoryReducer from './pages/category/categorySlice';
import productReducer from './pages/product/productSlice';
import paymentReducer from './pages/payment/paymentOptionSlice';
const store = configureStore({
  reducer: {
    user: adminUserReducer,
    category: categoryReducer,
    product: productReducer,
    paymentOption: paymentReducer,
  },
});

export default store;
