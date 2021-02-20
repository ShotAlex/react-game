import {Redirect, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Game from './Game';
import Rules from './Rules';
import Score from './Score';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Score />
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/game" component={Game}/>
          <Route path="/rules" component={Rules}/>
          <Redirect to="/"/>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
