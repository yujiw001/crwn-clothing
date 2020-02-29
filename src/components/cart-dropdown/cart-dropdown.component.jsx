import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItemsCount, selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-itmes'>
            {
                cartItems.map(cartItem=>(<CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// const mapStateToProps = ({cart:{cartItems}}) => ({
//     cartItems
// });

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);