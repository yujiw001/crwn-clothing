const INITIAL_STATE={
    currentUser: null
}
//下面的state=INITIAL_STATE是一个ES6新语句， 当state没有值的时候会给他一个默认值initial_state
const userReducer = (state = INITIAL_STATE,action) => {
   switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
   } 
};

export default userReducer;