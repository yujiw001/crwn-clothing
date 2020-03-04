import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
// import { dispatch } from '../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/range';
//此处为具体cart-icon组件的渲染，需要吃一个参数就是togglecartHidden这个action 这边的意思就是，每次onlick，都会触发toggleCartHidden函数
//而toggleCartHidden的函数效果就是会dispatch这个action
const CartIcon = ({ toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
<       span className='item-count'>{itemCount}</span>
    </div>
);
//此处写了一个toggleCartHidden function ， we are dispatching this action(toggleCartHidden()) whenever this function is invoked
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
//这里用不到store中的state，所以只需要发出action

//这里用来计算购物车中所有物品的总量，也需要从reducer中拉取cartItems下来。 reduce是个js自带的函数用来累加
// const mapStateToProps =  ({cart:{cartItems}}) => ({
//     itemCount:cartItems.reduce(
//         (accumalatedAuantity,cartItem) => accumalatedAuantity + cartItem.quantity,0
//     )
// })
// const mapStateToProps =  state => ({
//     itemCount:selectCartItemsCount(state)
// })
const mapStateToProps = createStructuredSelector  ({
    itemCount:selectCartItemsCount
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
