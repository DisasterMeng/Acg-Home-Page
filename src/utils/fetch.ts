import axios, { AxiosInstance, AxiosResponse } from 'axios'
import qs from 'query-string'


/**
 * 判断是否是formdata类型
 * 
 * @param {*} v 值
 */
const isFormData = (v: any) => Object.prototype.toString.call(v) === '[object FormData]'


interface Fetch {
    get<T = any, R = AxiosResponse<T>>(url: string, params?: object): Promise<R>
}

class FetchUtil implements Fetch {
  
    private instance: AxiosInstance

    constructor() {
        this.instance = axios.create({
            baseURL: '',
            responseType: 'json',
            transformRequest: [
                (data) => {
                    if (isFormData(data)) {
                        return data
                    }
                    return qs.stringify(data)
                }
            ],
            withCredentials: true
        })

        // 请求拦截器
        this.instance.interceptors.request.use(
            (config) => {
                config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
                return config
            },
            (err) => Promise.reject(err)
        )

        // 返回拦截器 
        this.instance.interceptors.response.use(
            (response) => Promise.resolve(response),
            (err) => Promise.reject(err)
        )

    }

    public get<T = any, R = AxiosResponse<T>>(url: string, params?: object | undefined): Promise<R> {
        this.instance.get(url,{params:params})
    }

}
