import {get ,post ,del ,put} from '../utils/request'

export function listApi(page=1,per=2){
    return get('/api/v1/admin/products',{page,per})
}


export function createApi(data){
    return post('/api/v1/admin/products',data)
}

export function modifyApi(id,data){
    return put('/api/v1/admin/products/'+id,data)
}

export function delApi(id,data){
    return del('/api/v1/admin/products/${id}',data)
}

export function getOneById(id){
    return get('/api/v1/admin/products/'+id)
}