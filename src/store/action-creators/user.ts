import {UserAction, UserActionType} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionType.FETCH_USERS
            })
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: UserActionType.FETCH_USERS_ERROR, payload: "error"
            })
        }
    }
}