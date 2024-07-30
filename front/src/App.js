import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { store } from './actions/store';
import { Container } from "@mui/material";
import Candidates from "./components/Candidates";
import { ToastProvider } from 'react-toast-notifications'; // Importar ToastProvider

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth="lg">
          <Candidates />
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
