export default function reviewDetails({params}:{
    params : {reviewNo : String,
    productId : String}
})
{
    return <h1>Review {params.reviewNo} is displyed for Product {params.productId}</h1>
}