
import './App.css';
import Router from './components/utils/Router';
import { SettingsProvider } from './components/utils/SettingsContext'

function App() {

  
  return (
    <SettingsProvider>
          <Router/>
    </SettingsProvider>
  )
   
 
}

export default App;
