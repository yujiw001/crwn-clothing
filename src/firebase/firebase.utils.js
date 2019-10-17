import firebase from 'firebase/app';
//import the database package
import 'firebase/firestore';
//import the auth package
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCqIzwAz8fSrBa5vky13V2IxXXQ54XJe-A",
    authDomain: "crwn-db-dc791.firebaseapp.com",
    databaseURL: "https://crwn-db-dc791.firebaseio.com",
    projectId: "crwn-db-dc791",
    storageBucket: "crwn-db-dc791.appspot.com",
    messagingSenderId: "918158843440",
    appId: "1:918158843440:web:93552bfe4359c1026fd7f5",
    measurementId: "G-1FLVMEXNGQ"
};

export const createUserProfileDocument = async(userAuth,additionalData) =>{
    if(!userAuth) return;
    //这两句话可以用来判断括号里的东西是否已经存在于数据库中了 await是异步相关的语法
    const userRef = firestore.doc(`user/${userAuth.uid}` );
    const snapShot= await userRef.get();
    //我们要存入的数据有，名字，地址，还有具体什么是什么时候创建的
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt= new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user',error.message);
        }
    }
    //we want the userRef return because we need to use it to check if our database hase been updated
    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
//下面这句话是筛选功能，因为popup可以是twiter授权，脸书授权。。。。等等很多，而我们把provider作为参数放进去后就只存在google授权
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

//下面是google auth所需的config配置代码
export default firebase;