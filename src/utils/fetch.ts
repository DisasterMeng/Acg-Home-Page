import axios, { AxiosInstance, AxiosResponse } from 'axios'
import qs from 'query-string'


/**
 * 判断是否是formdata类型
 * @param {*} v 值
 */
const isFormData = (v: any) => Object.prototype.toString.call(v) === '[object FormData]'



const createServiceInstance = () => {
    const instance = axios.create({
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
        withCredentials: true,
        timeout: 5 * 1000,
    })


    instance.interceptors.request.use(
        (config) => {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
            return config
        },
        (err) => Promise.reject(err)
    )


    instance.interceptors.response.use(
        (response) => Promise.resolve(response),
        (err) => Promise.reject(err)
    )
    return instance
}


interface BaseFetch {
    get<T = any, R = AxiosResponse<T>>(url: string, params?: object): Promise<R>
}

export default class FetchUtil {

    public static instance: AxiosInstance = createServiceInstance()


    public static get<T = any, R = AxiosResponse<T>>(url: string, params?: object | undefined): Promise<R> {
        return this.instance.get(url, { params })
    }

}
