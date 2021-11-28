import React, {FC} from 'react';
import {Route, Switch} from "react-router-dom";

import Footer from "../../component/Footer/Footer";
import NavBar from "../../component/NavBar/NavBar";
import Account from "../Admin/Admin";


const App: FC = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Account}/>
                <Route path="/menu" component={Account}/>
                <Route path="*" component={Account}/>
            </Switch>
            <Footer/>
        </>
    );
};

export default App;
