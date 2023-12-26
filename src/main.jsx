import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import CrudContextProvider from './Context/CrudContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

    <Router>
        <CrudContextProvider>
        <App />
        </CrudContextProvider>
        
    </Router>
    
  
)
