import axios from "axios";

const apiEndpoint = "https://rts:Rst.2023@rts.buzkar.keenetic.pro";

const http = axios.create({
    baseURL: apiEndpoint,
})

// const apiEndpoint = "http://clubbe.online";

export async function getData() {
    //const res = await fetch("http://clubbe.online/json/hava.json")
    // const res = await fetch(apiEndpoint + "/get-data", {
    //     headers: {
    //         'append': {
    //             'Authorization': 'Basic' + atob("rts:Rst.2023")
    //         }
    //     },
    //     method: 'POST'
    // })
    try {
        const res = await http.post('/get-data');
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        return {};
    }

}

export async function newLimit(limit) {

    const res = await fetch(apiEndpoint + "/new-limit?limit=" + limit, {
        method: 'POST'
    })

    return res.json()
}

export async function manuelVurus(limit) {

    const res = await fetch(apiEndpoint + "/turn-on", {
        method: 'POST'
    })

    return res.json()
}