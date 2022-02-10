import { api }from "../_config/api/config"

export const apiWrapper = {
    get,
    post,
    _delete,
    update
}


async function get(url){
    
    const resp = await api.get(url)

    return resp


}

async function post(){
  

}
async function _delete(url){
    
}


async function update(url){
    
}