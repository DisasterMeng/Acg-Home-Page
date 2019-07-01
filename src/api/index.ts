import FetchUtil from '../utils/fetch'


const BASE_API = process.env.VUE_APP_BASE_API

export const fetchIsWallApi = () => FetchUtil.get('https://www.google.com/')
