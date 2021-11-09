// import React, { createContext, useReducer } from 'react';
// import UserReducer from './UserReducer';
// import useAuthProvider from '@hook/useAuthProvider';
// import { SET_CURRENT_USER, LOGOUT_CURRENT_USER } from './UserTypes';

// const initialState = {
//   authUser: {},
//   isAuthenticate: false,
//   logInClick: () => {
//     //dkl
//   },
//   logOutClick: () => {
//     //hd
//   },
// };

// //create global context
// export const UserContext = createContext(initialState);

// //create Provider
// export const UserProvider = ({ children }) => {
//   const { loginTypes, loginAsync, logoutAsync } = useAuthProvider();
//   const [state, dispatch] = useReducer(UserReducer, initialState);

//   //actions
//   const userLogIn = () => {
//     loginAsync(loginTypes.redirect);
//   };

//   const userLogOut = () => {
//     dispatch({
//       type: LOGOUT_CURRENT_USER,
//     });
//     logoutAsync();
//   };

//   const setCurrentUser = (user) => {
//     dispatch({
//       type: SET_CURRENT_USER,
//       payload: user,
//     });
//   };

//   const providerValue = {
//     authUser: state.authUser,
//     isAuthenticate: state.isAuthenticate,
//     userLogIn,
//     userLogOut,
//     setCurrentUser,
//   };

//   return (
//     <UserContext.Provider value={providerValue}>
//       {children}
//     </UserContext.Provider>
//   );
// };
