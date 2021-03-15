import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import getStore from './redux/store';
import NavBarContainer from './components/Header/components/Navbar';
function App() {
  return (
    <Provider store={getStore}>
    <NavBarContainer></NavBarContainer>
    </Provider>
  );
}

export default App;
