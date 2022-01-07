import './App.css';
import { UserProvider } from './context/UserCtx';
import AppRouter from './api/AppRouter';

function App() {
  return (
    <div className="App">
        <UserProvider>
          <AppRouter />
        </UserProvider>
    </div>
  );
}

export default App;
