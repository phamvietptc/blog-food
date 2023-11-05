import actionTypes from './actionTypes';
import foodService from '../../service/foodService';
import { toast } from "react-toastify";

export const fetchAllFoodInfoStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type:actionTypes.FETCH_ALL_FOOD_INFO_START
            })
            let res = await foodService.getAllFoodInfo();
            console.log("Check res: ", res);
            if (res && res.errCode === 0) {
                dispatch(fetchAllFoodInfoSuccess(res.data));
            }
            else
            {
                dispatch(fetchAllFoodInfoFailed());
            }
        } catch (error) {
            dispatch(fetchAllFoodInfoFailed());
            console.log("fetchgenderstart: ",error)
        }
    }
}

export const fetchAllFoodInfoSuccess = (foodData) => ({
    type: actionTypes.FETCH_ALL_FOOD_INFO_SUCCEED,
    data: foodData,
})

export const fetchAllFoodInfoFailed = () => ({
    type: actionTypes.FETCH_ALL_FOOD_INFO_FAILED
})
