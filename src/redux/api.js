import { BASE_API } from "../assets/constants";

export const invokeApi = async (url, data) => {
    console.log('frtching...');
    return await fetch(`${BASE_API}/${url}`).then(res => res.json()).then(response => {
        return { response }
    }).catch(error => ({ error }))
}

export const postApi = async (url, data) => {
    return await fetch(`${BASE_API}/${url}`, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => res.json()).then(response => {
        return { response }
    }).catch(error => ({ error }))
}