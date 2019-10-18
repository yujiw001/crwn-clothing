import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser?(
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='/signIn'>
                    SIGN IN
                </Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null:<CartDropdown />
        }
        
    </div>
);
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// });
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
});
//the first argument is going to be the function that allow us to access the root reducer;
export default connect(mapStateToProps) (Header);