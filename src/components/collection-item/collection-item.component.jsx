import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import{addItem} from '../../redux/cart/cart.actions';
const CollectionItem = ({item,addItemFunction}) => {
    const {name,price,imageUrl} = item;
    return (
    <div className='collection-item'>
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}} />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted onClick={() =>addItemFunction(item)}  >Add to cart</CustomButton>
    </div>
    )};
//addItem是action creator，每当有item进来时调用dispatch把item放到action里面去
const mapDispatchToProps = dispatch => ({
    addItemFunction:item => dispatch(addItem(item))
});


export default connect(null,mapDispatchToProps)(CollectionItem);
