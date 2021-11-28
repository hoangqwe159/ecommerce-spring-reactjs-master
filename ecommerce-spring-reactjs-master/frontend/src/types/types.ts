

export type Product = {
    id: number
    productName: string
    year: number
    country: string
    productCategory: string
    description: string
    picturePath: string
    brand: string
    price: number
};

export type ProductErrors = {
    productNameError: string
    yearError: string
    countryError: string
    productCategoryError: string
    descriptionError: string
    picturePathError: string
    brandError: string
    priceError: string
};



export type BrandType = {
    name: string
    url: string
};
