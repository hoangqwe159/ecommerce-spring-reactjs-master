import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ToastShow from "../../../component/Toasts/ToastShow";


type InitialStateType = {
    productName: string
    year: string
    country: string
    productCategory: string
    description: string
    picturePath: string
    brand: string
    price: string
};

const AddPerfume: FC = () => {

    const initialState: InitialStateType = {
        productName: "",
        year: "",
        country: "",
        productCategory: "",
        description: "",
        picturePath: "",
        brand: "",
        price: "",
    };

    const [{
        productName,
        year,
        country,
        productCategory,
        description,
        picturePath,
        brand,
        price,
    }, setState] = useState(initialState);
    const [showToast, setShowToast] = useState(false);
    const [isProductAdded, setIsProductAdded] = useState(false);



    useEffect(() => {
        if (isProductAdded) {
            console.log('added');
            
            setState({...initialState});
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false)
            }, 5000);
            window.scrollTo(0, 0);
            setIsProductAdded(false);

            //TODO: Fetch product
        }
    }, [isProductAdded]);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        setIsProductAdded(true);
        console.log(productName,
            year,
            country,
            productCategory,
            description,
            picturePath,
            brand,
            price,);
        

        //TODO: POST Product
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
        const {name, value} = event.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    return (
        <>
            <ToastShow showToast={showToast} message={"Perfume successfully added!"}/>
            <div className="container">
                <h4><FontAwesomeIcon className="mr-2" icon={faPlusSquare}/>Add product</h4>
                <br/>
                <form onSubmit={onFormSubmit}>
                    <div className="form row">
                        <div className="col">
                            <label>Product Name: </label>
                            <input
                                type="text"
                                className={"form-control"}
                                name="productName"
                                value={productName}
                                placeholder="Enter the product name"
                                onChange={handleInputChange}/>
                        </div>
                        <div className="col">
                            <label>Brand: </label>
                            <input
                                type="text"
                                className={ "form-control"}
                                name="brand"
                                value={brand}
                                placeholder="Enter the brand"
                                onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Release year: </label>
                            <input
                                type="text"
                                className={"form-control"}
                                name="year"
                                value={year}
                                placeholder="Enter the release year"
                                onChange={handleInputChange}/>
                        </div>
                        <div className="col">
                            <label>Manufacturer country: </label>
                            <input
                                type="text"
                                className={"form-control"}
                                name="country"
                                value={country}
                                placeholder="Enter the manufacturer country"
                                onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Product category: </label>
                            <select name="type"
                                    className={"form-control"}
                                    onChange={handleInputChange}>
                                <option hidden={true} value=""></option>
                                <option value="Eau de Parfum">Eau de Parfum</option>
                                <option value="Eau de Toilette">Eau de Toilette</option>
                            </select>
                        </div>
                        <div className="col">
                            <label>Description: </label>
                            <input
                                type="text"
                                className={"form-control"}
                                name="description"
                                value={description}
                                placeholder="Enter the volume"
                                onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="form row mt-3">
                        <div className="col">
                            <label>Price: </label>
                            <input
                                type="text"
                                className={"form-control"}
                                name="price"
                                value={price}
                                placeholder="Enter the price"
                                onChange={handleInputChange}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark mt-3">
                        <FontAwesomeIcon className="mr-2" icon={faPlusSquare}/>Add
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddPerfume;
