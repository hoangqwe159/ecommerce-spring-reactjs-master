import React, {FC, useEffect} from 'react';
import {NavLink, Redirect, Route, RouteComponentProps} from "react-router-dom";


import AddPerfume from "./AddProduct/AddProduct";
import EditPerfume from "./EditProduct/EditProduct";
import ProductList from "./ProductList/ProductList";

import "./Admin.css";

const Account: FC = () => {
    //const dispatch = useDispatch();

    useEffect(() => {
    }, []);

    return (
        <div className="account-container container">
            <div className="row mt-5">

                <div className="col-md-12">
                    <Route exact path="/" component={() => <ProductList/>}/>   
                    <Route path="/menu/add" component={() => <AddPerfume/>}/>
                    <Route exact path="/menu/perfumes" component={() => <ProductList/>}/>    
                    <Route exact path="/menu/perfumes/:id" component={(props: RouteComponentProps<{ id: string }>) => <EditPerfume {...props}/>}/>                    
                </div>
            </div>
        </div>
    );
};

export default Account;
