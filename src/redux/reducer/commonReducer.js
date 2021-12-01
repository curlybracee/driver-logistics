import { TYPES } from "../action";

const initialState = {
    testimonials: {
        data: []
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_TESTIMONIALS_SUCCESS: {
            return Object.assign({}, state, {
                testimonials: {
                    data: action.payload || []
                },
            })
        }
        default: return state
    }
}
export default userReducer;
