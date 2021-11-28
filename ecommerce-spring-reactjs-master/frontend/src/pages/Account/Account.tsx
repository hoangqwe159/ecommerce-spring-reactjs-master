import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {NavLink, Redirect, Route, RouteComponentProps} from "react-router-dom";


import {formReset} from "../../redux/thunks/admin-thunks";
import {fetchUserInfo} from "../../redux/thunks/user-thunks";

import AddPerfume from "./AddPerfume/AddPerfume";
import EditPerfume from "./EditPerfume/EditPerfume";
import PerfumeList from "./PerfumeList/PerfumeList";

import "./Account.css";

const Account: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(formReset());
        dispatch(fetchUserInfo());
    }, []);

    return (
        <div className="account-container container">
            <div className="row mt-5">

                <div className="col-md-12">
                    <Route path="/menu/add" component={() => <AddPerfume/>}/>
                    <Route exact path="/menu/perfumes" component={() => <PerfumeList/>}/>    
                    <Route exact path="/menu/perfumes/:id" component={(props: RouteComponentProps<{ id: string }>) => <EditPerfume {...props}/>}/>                    
                </div>
            </div>
        </div>
    );
};

export default Account;
