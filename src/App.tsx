
import './App.css';
import "x-app-ui/x-app-ui.css"
import { XToastProvider, XLoadingProvider } from 'x-app-ui';
import RouterApp from './router/router-app';

function App() {
  return (
    <XLoadingProvider>
      <XToastProvider>
        <RouterApp />
      </XToastProvider>
    </XLoadingProvider>
  );
}

export default App;
