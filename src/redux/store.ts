// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contactsSlice';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { authReducer } from './authorization/auth-slice';

// const persistConfig = {
//   key: 'auth-token',
//   storage,
//   whitelist: ['token'],
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     auth: persistedAuthReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
