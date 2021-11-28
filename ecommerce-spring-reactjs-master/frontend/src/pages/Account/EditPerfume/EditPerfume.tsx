import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {RouteComponentProps} from 'react-router-dom';


import { Product} from "../../../types/types";
import ToastShow from "../../../component/Toasts/ToastShow";

const EditPerfume: FC<RouteComponentProps<{ id: string }>> = ({match}) => {
    //TODO: Fetch cai nay ve dua vao id
    const productData: Product = {id: 1,
        productName: 'R312',
        year: 2000,
        country: 'Vietnam',
        productCategory: 'Mouse',
        description: 'string',
        picturePath: 'https://m.media-amazon.com/images/I/516NCsvHpmL.jpg',
        brand: 'Razer',
        price: 100}
    const [isProductEdited, setIsProductEdited] = useState(false);
    const [product, setProduct] = useState<Partial<Product>>(productData);
    const [showToast, setShowToast] = useState(false);
    


    const {
        id,
        productName,
        year,
        country,
        productCategory,
        description,
        picturePath,
        brand,
        price,
    } = product;

    useEffect(() => {
        //TODO Fetch Product id
    }, []);

    useEffect(() => {
        setProduct(productData);
        if (isProductEdited) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false)
            }, 5000);
            window.scrollTo(0, 0);
        }
    }, [product]);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        setIsProductEdited(true);
        console.log(id,
            productName,
            year,
            country,
            productCategory,
            description,
            picturePath,
            brand,
            price,);
        

        //TODO: Update product
    };

    

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
        const {name, value} = event.target;
        setProduct({...product, [name]: value});
    };

    return (
        <>
            <ToastShow showToast={showToast} message={"Product successfully edited!"}/>
            <div className="container">
                <h4><FontAwesomeIcon className="mr-2" icon={faEdit}/>Edit Product</h4>
                <form onSubmit={onFormSubmit}>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Product Name: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        name="productName"
                                        value={productName}
                                        onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Brand: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        name="brand"
                                        value={brand}
                                        onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Release year: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        name="year"
                                        value={year}
                                        onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Country: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        name="country"
                                        value={country}
                                        onChange={handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Product Category: </label>
                                <div className="col-sm-8">
                                    <select name="type"
                                            className={"form-control"}
                                            onChange={handleInputChange}>
                                        //TODO
                                        {productData.productCategory === "Mouse" ?
                                            <>
                                                <option value={productData.productCategory}>{productData.productCategory}</option>
                                                <option value="Monitor">Eau de Toilette</option>
                                            </> :
                                            <>
                                                <option value={productData.productCategory}>{productData.productCategory}</option>
                                                <option value="Mouse">Eau de Parfum</option>
                                            </>}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Description: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        name="description"
                                        value={description}
                                        onChange={handleInputChange}/>
                                </div>
                            </div>              
                   
                       
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Price: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={"form-control"}
                                        name="price"
                                        value={price}
                                        onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>                
                    </div>
                    <button type="submit" className="btn btn-dark">
                        <FontAwesomeIcon className="mr-2" icon={faEdit}/>Edit
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditPerfume;

