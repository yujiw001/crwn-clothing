import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import './App.css';
import{connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { fromEventPattern } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { setCurrentUser } from './redux/user/user.actions';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state= {
  //     currentUser:null
  //   }
  // }
  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      // this.setState({currentUser:user});
      // console.log(user);
      // createUserProfileDocument返回的就是就是一个userRef我们把它储存起来
      //snapshot里包含id，然后snapshot.data()里包含剩余我们所需要的数据，两者结合，配合onSnapshot的即时返回，我们得到所有数据并setstate
      //我们用createUserProfileDocument把新的auth写入数据库之后，返回那个新数据的userRef，然后我们要用这个userRef来check数据库是否
      //已经update，并且用userRef得到的数据（snapShot.id和snapShot.data函数）来做我们app中“state”的更新，setstate！
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        //onSnapshot will listen to this userRef for any change to that data, but we will also get the first state of that data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          // this.props.setCurrentUser({
          //   id: snapShot.id,
          //   ...snapShot.data()
          // });
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // });
          console.log(this.state);
        });
      }
      //else, set the currentUser null
      //once the user sign out. set the currentUser to NULL
      // this.setState({currentUser:userAuth});
      setCurrentUser(userAuth);
    });
  }
  render() {
    return (<div>
      {/* <Header currentUser={this.state.currentUser} /> */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/shop' component={ShopPage}/>
        {/* <Route exact path='/signIn' component={SignInAndSignUpPage}/> */}
        <Route exact path='/signIn' render={()=>this.props.currentUser? (<Redirect to='/'/>):(<SignInAndSignUpPage />)}/>
      </Switch>
    </div>
    );
  }
}
//重要点，这个mapStateToProps的作用是帮我们取到reducer之中的state供我们使用
const mapStateToProps =({user})=> ({
  currentUser:user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
