import React, {Component} from "react";
import "./style.css";
import StickyHeader from "react-sticky-header";
import 'react-sticky-header/styles.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Link } from "react-router-dom";


var isActive = false;

const config = {
  apiKey: "AIzaSyClLZGqS5fJUj3iGjZixb7PAW13rsS9LBM",
  authDomain: "great-race-24eee.firebaseapp.com",
  databaseURL: "https://great-race-24eee.firebaseio.com",
  projectId: "great-race-24eee",
  storageBucket: "great-race-24eee.appspot.com",
  messagingSenderId: "30337884212"
};

firebase.initializeApp(config);

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: 'index.html',
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const soundEffect = () => {
  const audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/17575/click.mp3');
  audio.volume = .3;
  audio.preload = true;
  audio.play();

  if (isActive === false) {
    isActive = true
  } else {
    isActive = false
  }
}

class Nav extends Component{

  state = {
    isSignedIn: false
  };

  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    );
  }

  componentWillUnmount = () => {
    this.unregisterAuthObserver();
  }


  render() {

    if (!this.state.isSignedIn) {
      return (
        <StickyHeader
          header={
            <div className="Header_root">
              <div className={(isActive ? "menu open" : "menu")} onClick={() => soundEffect()}>
                <span className="menu-circle"></span>
                <a href="#" className="menu-link">
                  <span className="menu-icon">
                    <span className="menu-line menu-line-1"></span>
                    <span className="menu-line menu-line-2"></span>
                    <span className="menu-line menu-line-3"></span>
                  </span>
                </a>
              </div>

              <div className={(isActive ? "menu-overlay open" : "menu-overlay")} >
                <Link to="/library" className="overlay-info">
                  <h1>Visit Our Library</h1>
                </Link>
                <Link to="/" className="overlay-info">
                  <h1>Our Blog</h1>
                </Link>
                <Link to="/landing" className="overlay-info">
                  <h1>About Us</h1>
                </Link>
                <a href="#" className="overlay-info">
                  <h1>Volunteer With Us</h1>
                </a>
                <a href="#" className="overlay-info">
                  <h1>Sign In</h1>
                </a>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
              </div>
            </div>
          }
        >
        </StickyHeader>
      );
    };

    return (
      <StickyHeader
        header={
          <div className="Header_root">
            <div className={(isActive ? "menu open" : "menu")} onClick={soundEffect}>
              <span className="menu-circle"></span>
              <a href="#" className="menu-link">
                <span className="menu-icon">
                  <span className="menu-line menu-line-1"></span>
                  <span className="menu-line menu-line-2"></span>
                  <span className="menu-line menu-line-3"></span>
                </span>
              </a>
            </div>

            <div className={(isActive ? "menu-overlay open" : "menu-overlay")} >
            <p className="overlay-info">Hi {firebase.auth().currentUser.displayName}!</p>
            <p className="overlay-info">Reading Rank: <span>Space Cadet</span></p>
              <Link to="/library" className="overlay-info">
                <h1>Visit Our Library</h1>
              </Link>
              <Link to="/library" className="overlay-info">
              <h1>Personal Library: <span>7</span> Books!</h1>
              </Link>
              <a href="#" className="overlay-info">
                <h1>Our Blog</h1>
              </a>
              <a href="#" className="overlay-info">
                <h1>Volunteer With Us</h1>
              </a>
              <a href="#" className="overlay-info" onClick={() => firebase.auth().signOut()}>
                <h1>Sign Out</h1>
              </a>
            </div>
          </div>
        }
      >
      </StickyHeader>
    );
  };
}




export default Nav;
