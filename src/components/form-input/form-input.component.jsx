import React from 'react';
import './form-input.styles.scss';
//此文件的全部意义在于，系统自带的input不好使，我们要自己创建一个符合设计师要求的<forminput>来替代input，由此实现我们独特所需的style
//处理具体的用户表单输入
//handleChange将被作为参数导入，handlechange的作用是把用户输入的值得具体value给pull下来，这里的function的需要调用到此函数
//在input标签下，一旦用户输入（onchange），则立刻调用handlechange的函数，（还要导入其他state中的属性，有用）
//当没有user 输入东西的时候， label就是正常大小，但一旦有输入，就会调用shrink.css来产生缩小的效果
//包含还是不包含css中的shrink style要看具体情况， 要是value有东西（即有输入的话），那么也给他shrink的classname（这样在css中被启用了）
const FormInput = ({ handleChange,label,...otherProps}) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {   
            label ?
            (<label className={`${otherProps.value.length ? 'shrink':''} form-input-label `}>
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;