import { api }from "../config/config"

export const apiWrapper = {
    get,
    post,
    _delete,
    update
}


async function get(url){

    const resp = await api.get(url)
    console.log(resp.data)

}

async function post(url){

}


async function _delete(url){
    
}


async function update(url){
    
}