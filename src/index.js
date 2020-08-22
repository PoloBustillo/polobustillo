import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/font.css'
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import WelcomeSection from './components/welcomeSection';
import Intro from './components/intro';
import Contacto from './components/contacto'
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Root extends React.Component {
  constructor(props){
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount(){
    setTimeout(function(){
           this.setState({isLoading:false});
      }.bind(this),10000);
  }

  render() {
    return(
      <BrowserRouter basename={'/'} >
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              timeout={{ enter: 400}}
              classNames='fade'
              key={location.key}
            >
            {
              this.state.isLoading?
              <Intro/>:
              <Switch location={location}>
                <App>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={WelcomeSection}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/home`} component={WelcomeSection}/>
                  <Route exact path={`${process.env.PUBLIC_URL}/contacto`} component={Contacto}/>
                </App>
              </Switch>
            }
            </CSSTransition>
          </TransitionGroup>
          )} />
      </BrowserRouter>
    )
  }

}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
