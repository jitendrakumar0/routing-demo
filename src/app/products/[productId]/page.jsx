import {Metadata} from 'next'

export const generateMetadata = ({params}) => {
    return {
        title: `Products ${params?.productId} | SheekLunga`
    }
}
const ProductDetails = ({params}) => {
    return (
        <h1>Detail about product {params?.productId}</h1>
    )
}

export default ProductDetails