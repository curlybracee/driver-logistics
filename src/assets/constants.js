const test_api='https://besterpsolution.in/demo/driver_logistics/public/api'
const prod_api='https://driverlogistics.in'
export const BASE_API = test_api


export const URL = {
    TESTIMONIAL: 'testimonial',
    BANNER: 'banner',
    BLOG: 'blog',
    CLIENT: 'client',
    RESUME: 'career',
    STATISTICS:'statistics',
    CLIENT_LOGOS:'clientlogos',
    NEWS_LETTER: 'newslettersave',
    CONTACT: 'contact',
}

export const formatDate=(val)=>new Date(val).toDateString()