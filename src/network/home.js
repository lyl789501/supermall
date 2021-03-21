import {request} from "./request"

/* 多设置了一个home层，方便对主页的所有url进行管理 */
export function getHomeMultidata(){
    return request({
        url:'http://152.136.185.210:7878/api/m5/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'http://152.136.185.210:7878/api/m5/home/data',
        params:{
            type,
            page
        }
    })
}