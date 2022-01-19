import {apiWrapper} from "../helpers/api-wrapper"

export const asnyc = {
    getAll

}

const url = '/api/v1/product'

function getAll(){

    return  apiWrapper.get(url)
    
}