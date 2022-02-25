import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {Box} from '@material-ui/core';
import DetalView from './components/post/DetalView';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';

function App() {
  return (
     <>
      <BrowserRouter>
         <Header />
         <Box style={{marginTop:64}}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/details/:id' component={DetalView}/>
            <Route exact path='/create' component={CreateView}/>
            <Route exact path='/update/:id' component={UpdateView}/>
          </Switch>
         </Box>
      </BrowserRouter>        
     </>
  )
}

export default App;
