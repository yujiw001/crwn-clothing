import React from 'react';
import './custom-button.styles.scss';
//children将获得其下的所有子元素标签. children of the props 要获得<form onsubmit>下面所有的子元素然后提交
const CustomButton =({children,...otherProps}) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;