const test_api = 'https://besterpsolution.in/demo/driver_logistics/public/api'
const prod_api = 'https://driverlogistics.in'
const user_test_api = 'https://localhost:44342/api'
const user_prod_api = 'http://13.71.87.214:86/driverapi/api'
export const BASE_API = test_api
export const USER_BASE_API = user_prod_api
export const CRM_API = "http://crm.everi.in/api"
export const URL = {
    TESTIMONIAL: 'testimonial',
    BANNER: 'banner',
    BLOG: 'blog',
    CLIENT: 'client',
    RESUME: 'career',
    STATISTICS: 'statistics',
    CLIENT_LOGOS: 'clientlogos',
    NEWS_LETTER: 'newslettersave',
    NEWS: 'eventnews',
    CONTACT: 'contact',
    LOGIN: 'login',
    GET_DASHBOARD: 'get-dashboard',

}

export const formatDate = (val) => new Date(val).toDateString()