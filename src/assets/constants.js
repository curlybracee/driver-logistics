const test_api='https://besterpsolution.in/demo/driver_logistics/public/api'
const prod_api='https://driverlogistics.in'
export const BASE_API = test_api
export const AUTH_API="http://13.71.87.214:86/driverapi/api"
export const CRM_API="http://crm.everi.in/api"
export const URL = {
    TESTIMONIAL: 'testimonial',
    BANNER: 'banner',
    BLOG: 'blog',
    CLIENT: 'client',
    RESUME: 'career',
    STATISTICS:'statistics',
    CLIENT_LOGOS:'clientlogos',
    NEWS_LETTER: 'newslettersave',
    NEWS: 'eventnews',
    CONTACT: 'contact',
    LOGIN:'login',
    GET_ORDERS:'get-orders',
    GET_ORDER_DETAILS:'get-order-details',
    GET_DASHBOARD:'get-dashboard'
}

export const formatDate=(val)=>new Date(val).toDateString()