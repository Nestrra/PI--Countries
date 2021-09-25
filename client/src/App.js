
import { AppRouters } from './components/routers/AppRouters';
import {Provider} from 'react-redux'
import {store} from './store/store'


function App() {
  return (
    <Provider store={store}>      
    <div className="App">
    <AppRouters/>
    </div>
    </Provider>
  );
}

export default App;
