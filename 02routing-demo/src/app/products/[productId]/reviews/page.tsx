export default function Review({params}:{
    params : {
        productId : string,
    }
}){
    return <>
    <h2>This is the list of Reviews for product :{params.productId}</h2>
    </>
}