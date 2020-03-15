import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItemsCount, selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems,history}) => (
    <div className='cart-dropdown'>
        <div className='cart-itmes'>
            {
                cartItems.length?
                cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem} />
                ))
                :(
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
        </div>
        <CustomButton onClick={()=>history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);

// const mapStateToProps = ({cart:{cartItems}}) => ({
//     cartItems
// });

// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// });
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));