import React from 'react';
import './custom-button.styles.scss';
//children将获得其下的所有子元素标签. children of the props 要获得<form onsubmit>下面所有的子元素然后提交，就是submit的是form they are in
//此处就是要获取form
//type:submit是在...otherProps中被导入的。。然后再此下面提交{children}，既其下所有表单
const CustomButton =({children,isGoogleSignIn,...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in':''} custom-button` } {...otherProps}>
        {children}
    </button>
);

export default CustomButton;