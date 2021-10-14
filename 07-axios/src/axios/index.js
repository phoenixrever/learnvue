import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/',
        timeout: 5000
    });
    //请求request 拦截(发送请求之前)
    instance.interceptors.request.use(config=>{
        console.log(config);
        return config
    },error=>{
        console.log(error);
        return error
    });

    //响应response 拦截(发送请求得到数据之后)
    instance.interceptors.response.use(result=>{
        // console.log(result);
        //传递给then的数据
        return result
    },error=>{
        // console.log(error);
        //传递给catch的数据
        return error
    });
    return instance(config)
}