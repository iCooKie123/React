import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
    
//   </React.StrictMode>
// )

const app=<App/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

