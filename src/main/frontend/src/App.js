import React, {Fragment} from 'react';
import './App.css';
import Header from './react_modules/header';



const App = ({children}) => (

    <Fragment >
    <Header/>
      {children}
    </Fragment>
);

export default App;

