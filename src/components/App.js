import {Redirect, Route, Switch} from 'react-router-dom';
import Game from './Game';
import Rules from './Rules';
import Home from './Home';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/game" component={Game}/>
      <Route path="/rules" component={Rules}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;
