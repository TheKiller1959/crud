import { configureStore } from '@reduxjs/toolkit';
import userSlice from './crudSlice';

export default configureStore({
  reducer: {
    user: userSlice,
  }
})