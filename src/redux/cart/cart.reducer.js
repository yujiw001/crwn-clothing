import CartActionTypes from './cart.types';
//这边的reducer来具体处理cart可能会发生的行为
//首先先设定两个默认变量， 最开始的时候默认是hidden的，然后购物车列表为空
const INITIAL_STATE ={
    hidden: true,
    cartItems: []
}
//这边正式开始写reducer，reducer吃两个参数，第一个是previous state（初始化为INI_STATE),第二个为action，由action去产生新的state
//然后！dispatch的action会在这里被处理
const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                //一旦触发鼠标点击就把hidden的值反置
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems,action.payload]
            };
        default:
            return state;
    }
};

export default cartReducer;