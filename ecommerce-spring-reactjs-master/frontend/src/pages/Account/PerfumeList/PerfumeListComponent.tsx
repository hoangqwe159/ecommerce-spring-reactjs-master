import React, {FC, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faList} from "@fortawesome/free-solid-svg-icons";
import {LazyLoadImage} from "react-lazy-load-image-component";

import usePagination from "../../../component/Pagination/usePagination";
import {Product} from "../../../types/types";
import SearchForm from "../../../component/SearchForm/SearchForm";
import PaginationItem from "../../../component/Pagination/PaginationItem";
import {Link} from "react-router-dom";
import Spinner from '../../../component/Spinner/Spinner';

type PropsType = {
    data: Array<Product>
    itemsPerPage: number
    startFrom?: number
    searchByData: Array<{ label: string, value: string }>
};


const PerfumeListComponent:FC<PropsType> = ({data, itemsPerPage,startFrom,searchByData}) => {
    const loading: boolean = data === null;


    const {
        slicedData,
        pagination,
        prevPage,
        nextPage,
        changePage,
        setFilteredData,
        setSearching
    } = usePagination({itemsPerPage, data, startFrom});

    useEffect(() => {
    }, [data]);

    const deleteProduct = (product: Product): void => {
        //TODO: Delete product
        console.log(product);        
    };




    return (
        <>

            <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faList}/> List of products</h4>
            <br/>
            <SearchForm
                data={data}
                searchByData={searchByData}
                setFilteredData={setFilteredData}
                setSearching={setSearching}/>
            <div className="mt-3">
                <PaginationItem
                    pagination={pagination}
                    prevPage={prevPage}
                    changePage={changePage}
                    nextPage={nextPage}/>
            </div>
            {loading ? <Spinner/> :
            <>
                <div className="container-fluid mt-3">
                    <div className="row">
                        {slicedData.map((product: Product) => {
                            return (
                                <div key={product.id} className="col-lg-3">
                                    <div className="card mb-5" style={{height: "220px"}}>
                                        <div style={{height: "92px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <LazyLoadImage
                                                effect="blur"
                                                style={{width: "80px", marginTop: "20px"}}
                                                src={product.picturePath}/>
                                        </div>
                                        <div className="card-body text-center">
                                            <h6>{product.productName}</h6>
                                            <h6>{product.brand}</h6>
                                            <h6><span>${product.price}</span>.00</h6>
                                        </div>
                                        <div className="btn-group text-center mb-3">
                                            <Link type="button" className="btn btn-dark ml-2"
                                                  to={`/menu/perfumes/${product.id}`}>
                                                <FontAwesomeIcon className="fa-xs" icon={faEdit}/> Edit
                                            </Link>
                                            <button className="btn btn-warning mr-2"
                                                    onClick={() => deleteProduct(product)}>
                                                <FontAwesomeIcon className="fa-xs" icon={faTrash}/> Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <PaginationItem
                    pagination={pagination}
                    prevPage={prevPage}
                    changePage={changePage}
                    nextPage={nextPage}/>
            </>
            }
        </>
    );
};

export default PerfumeListComponent;
