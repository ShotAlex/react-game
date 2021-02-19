import '../styles/App.scss';
import Header from './Header';
import {Route, Switch} from 'react-router-dom';
import Main from './Main';
import Game from './Game';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/game" component={Game} />
      </Switch>
    </>
  );
}

export default App;
