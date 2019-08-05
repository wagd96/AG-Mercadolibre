import Axios from 'axios'

export default {
    getProducts(product){
        return Axios.get(`/search?q=${product}`)
    }
}