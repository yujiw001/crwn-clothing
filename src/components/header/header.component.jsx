import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
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
//hidden的值是哪里来的？是通过mapStateToProps从reducer中把state的值取下来
//上方currentuser的值是通过mapStateToProps从store中把值取下来去用
// const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
//     currentUser,
//     hidden
// });

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
});
//the first argument is going to be the function that allow us to access the root reducer;
export default connect(mapStateToProps) (Header);