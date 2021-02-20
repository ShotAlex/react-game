import {Redirect, Route, Switch} from 'react-router-dom';
import Main from './Main';
import Game from './Game';
import Rules from './Rules';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/game" component={Game}/>
      <Route path="/rules" component={Rules}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;
