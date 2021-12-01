import { BASE_API } from "../assets/constants";

export const invokeApi = async (url, data) => {
    console.log('frtching...');
    return await fetch(`${BASE_API}/${url}`).then(res => res.json()).then(response => {
        return { response }
    }).catch(error => ({ error }))
}