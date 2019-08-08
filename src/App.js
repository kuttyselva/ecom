import React from 'react';
import HomePage from './page/homepage/homepage.component';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Shop from './page/shop/shop.component';
import Header from './components/header/header.component';
import Signinup from './page/signinup/siginup.component';
import { auth, createUserProfile } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }
      else {
        this.setState({ currentUser: userAuth })
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={Signinup} />

        </Switch>
      </div>
    );
  }
}

export default App;
