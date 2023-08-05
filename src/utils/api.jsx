import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {

    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': '539dfc70fbmsh0ca41990b7466b3p16a76fjsn4d06c926f1a7',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}