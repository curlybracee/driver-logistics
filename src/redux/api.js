import { BASE_API } from "../assets/constants";
import _ from 'lodash'

export const invokeApi = async (url, data) => {
    let newUrl = url
    if(!_.isEmpty(data)){
        newUrl+='?'+new URLSearchParams({...data})
    }
    return await fetch(`${BASE_API}/${newUrl}`).then(res => res.json()).then(response => {
        return { response }
    }).catch(error => ({ error }))
}

export const postApi = async (url, formElement) => {
    var form_data = new FormData();
    for ( var key in formElement ) {
        form_data.append(key, formElement[key]);
    }
    return await fetch(`${BASE_API}/${url}`, {
        method: 'POST',
        body: form_data
    }).then(res => res.json()).then(response => {
        return { response }
    }).catch(error => ({ error }))
}