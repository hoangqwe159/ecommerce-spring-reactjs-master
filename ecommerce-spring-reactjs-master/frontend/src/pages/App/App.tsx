import React, {FC} from 'react';
import {Route, Switch} from "react-router-dom";

import Footer from "../../component/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../component/NavBar/NavBar";
import Account from "../Account/Account";


const App: FC = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/menu" component={Account}/>
                <Route path="*" component={HomePage}/>
            </Switch>
            <Footer/>
        </>
    );
};

export default App;
