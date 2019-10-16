import React from 'react';
import FormInput from '../form-input/form-input.component.jsx'
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component.jsx'
import { SignInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange = event =>{
        const {value,name} = event.target; //event.target可以捕获事件触发的节点，也就是可以返回用户输入的值
        this.setState({[name]:value})//然后把值赋给state
    }
    //onsubmit,在用户按了submit按钮之后，类函数中的handleSubmit函数将被调用
    //label，选择性渲染label
    //在这里把需要的参数全部到送入到<FormInput>标签里就行了
    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>     
                    <FormInput name="email" type="email" value={this.state.email} label="email" handleChange={this.handleChange} required />
                    
                    <FormInput name="password" type="password" value={this.state.email} label="password" handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;