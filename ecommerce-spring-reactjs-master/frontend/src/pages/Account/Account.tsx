import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import { Route} from "react-router-dom";

import {formReset} from "../../redux/thunks/admin-thunks";
import {fetchUserInfo} from "../../redux/thunks/user-thunks";

import AddPerfume from "./AddPerfume/AddPerfume";

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
                </div>
            </div>
        </div>
    );
};

export default Account;
