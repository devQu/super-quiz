import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/quiz/:id" component={Quiz} ></Route>
        <Route path="/quiz-create" component={QuizCreator} ></Route>
        <Route path="/auth" component={Auth} ></Route>
        <Route path="/" component={QuizList} ></Route>
      </Switch>
    </Layout>
  );
}

export default App;
