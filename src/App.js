import {Provider} from 'react-redux'
import getStore from './redux/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBarContainer from './components/Header/components/Navbar';
import RecipeList from './components/recipes/component';
function App() {
  return (
    
    <BrowserRouter>
    <Provider store={getStore}>
      
    <NavBarContainer></NavBarContainer>
    <Switch>
      <Route exact path="/">
        <RecipeList/>
      </Route>
    </Switch>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
