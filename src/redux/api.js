import { AUTH_API, BASE_API,CRM_API } from "../assets/constants";
import _ from 'lodash'

export const invokeApi = async (url, data,auth) => {
    console.log({auth})
    let newUrl = url
    if(!_.isEmpty(data)){
        newUrl+='?'+new URLSearchParams({...data})
    }
    return await fetch(`${auth?AUTH_API:BASE_API}/${newUrl}`).then(res => res.json()).then(response => {
        return { response }
    }).catch(error => ({ error }))
}

export const postApi = async (url, formElement,auth,json) => {
    var form_data = new FormData();
    for ( var key in formElement ) {
        form_data.append(key, formElement[key]);
    }
    console.log({formElement})
    return await fetch(`${auth?(json?CRM_API:AUTH_API):BASE_API}/${url}`, {
        method: 'POST',
        body: json?JSON.stringify(formElement):form_data
    }).then(res => res.json()).then(response => {
        return { response }
    }).catch(error => ({ error }))
}

