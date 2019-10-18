import CartActionTypes from './cart.types';
const INITIAL_STATE ={
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                //一旦触发鼠标点击就把hidden的值反置
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default cartReducer;