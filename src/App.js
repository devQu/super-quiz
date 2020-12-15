import React from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Logout from './components/Logout/Logout';
import { connect } from 'react-redux';
import { autoAuth } from './store/actions/auth';

class App extends React.Component {

  componentDidMount() {
    this.props.autoAuth()
  }

  render() {
    let routAuth = (
      <Switch>
        <Route path="/quiz/:id" component={Quiz} ></Route>
        <Route path="/quiz-create" component={QuizCreator} ></Route>
        <Route path="/logout" component={Logout} ></Route>
        <Route path="/" component={QuizList} ></Route>  
        <Redirect to='/' />
      </Switch>
    );
    let routNoAuth = (
      <Switch>
        <Route path="/quiz/:id" component={Quiz} ></Route>
        <Route path="/auth" component={Auth} ></Route>
        <Route path="/" component={QuizList} ></Route>
        <Redirect to='/' />
      </Switch>
    );
    return (<Layout>{this.props.isAuth ? routAuth : routNoAuth}</Layout>);
  }
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.authReducer.token
  }
}
function mapDispatchToProps(dispatch) {
  return {
    autoAuth: () => dispatch(autoAuth())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
