export default function productDetails({params}:
    {
        params:
        {
            productId: String
        }
    })
    {
        {console.log(params)}
    return <h1>Product Details of the selected Product of the Id : {params.productId}</h1>
}