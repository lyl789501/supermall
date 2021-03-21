// 为了增加代码复用性，用request管理网络
import axios from 'axios'


export function request(config){
    //1、创建axios的实例
    const instance = axios.create({
        baseUrl:'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    //2、拦截器
    instance.interceptors.request.use(
        config=>{
            //拦截config后，必须返回
            return config;
        },
        err=>{
        }
    )

    //响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res);
        return res.data;
    },
    err=>{
        console.log(err);
    })
// 发送真正的网络请求,返回了一个promise对象
 return instance(config)
}

