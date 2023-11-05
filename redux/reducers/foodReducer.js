import actionTypes from "../actions/actionTypes";

const initContentOfConfirmModal = {

}

const initialState = {
    isLoadingFoodInfo: false,
    foodInfo: [],

    // isLoadingPosition: false,
    // isLoadingRole: false,
    // genders: [],
    // roles: [],
    // positions: [],

    // allRequireDoctorInfo:[]
    
}

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_FOOD_INFO_START: 
            state.isLoadingFoodInfo = true; 
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_FOOD_INFO_SUCCEED: 
            state.foodInfo = action.data;
            console.log(">> check state.foodInfo in reducers: ", state)
            state.isLoadingFoodInfo = false; 
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_FOOD_INFO_FAILED: 
            state.isLoadingFoodInfo = false; 
            state.foodInfo = [];
            return {
                ...state
            }
        
        // case actionTypes.FETCH_POSITION_SUCCESS: 
        //     state.positions = action.data; 
        //     return {
        //         ...state
        //     }

        // case actionTypes.FETCH_POSITION_FAILED: 
        //     state.positions = []; 
        //     return {
        //         ...state
        //     }

        default:
                return state;
        }
}

export default foodReducer;