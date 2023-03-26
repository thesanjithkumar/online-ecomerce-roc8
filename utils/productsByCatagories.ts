
export const getproductsByCatagories = async (catagory: string) => {
    const response = await fetch(
        `https://dummyjson.com/products/category/${catagory}`
    );
    const data = await response.json();
    return data.products;
}