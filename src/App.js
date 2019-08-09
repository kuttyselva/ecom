import React from 'react';
import HomePage from './page/homepage/homepage.component';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './page/shop/shop.component';
import Header from './components/header/header.component';
import Signinup from './page/signinup/siginup.component';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {

  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      else {
        setCurrentUser(userAuth)
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" render={()=>this.props.currentUser?<Redirect to="/"/>: <Signinup/>} />

        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
