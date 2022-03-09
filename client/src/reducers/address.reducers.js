import { GET_ADDRESS } from "../constants/action";

const initialState={

    addresses :[],
    address:null,
    isLoading:false,
    error:{}

}

const AddressReducers = (state = initialState,action) => {
    const {payload,type}=action;
    switch (type) {
        case GET_ADDRESS:
            
           return;
        default:
            return state
     
    }

}

export default AddressReducers;
