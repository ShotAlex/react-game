import Header from './Header';
import {Redirect, Route, Switch} from 'react-router-dom';
import Main from './Main';
import Game from './Game';
import Rules from './Rules';
import './../styles/app.scss';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/game" component={Game}/>
          <Route path="/rules" component={Rules}/>
          <Redirect to="/"/>
        </Switch>
      </main>
    </>
  );
}

export default App;
