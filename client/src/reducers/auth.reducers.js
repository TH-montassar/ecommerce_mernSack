import { REGISTER, LOGIN, AUTH_ERROR } from "../constants/action";
const initialState = {
  //* token:null  ,///9bal may3mel login
  //m3a ta7sine hethy
  token: localStorage.getItem("token"), //local storage kif session ama maytfasa5th kif to5rej m site //te5ser session kif tlody
  user: null, //9bal may3mel login
  error: {},
  loading: false, //check if i nab3ath fi req or not
  isAuthenticated: false,
};
const AuthReducers = (state = initialState, action) => {
  const { type, payload } = action;
  ///chnwa ysir wa9t login wella regiter wella  ..
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
      };

    case REGISTER:
      return {
        ...state,
        user: payload,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        uisAuthenticated: true,
        user: null,
        token: null,
        error: payload.error,
      };

    default:
    return  state;
    
    
  }
};

export default AuthReducers;
