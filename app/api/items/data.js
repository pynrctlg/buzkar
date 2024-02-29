// const apiEndpoint = "http://clubbe.online";
const apiEndpoint = "https://rts.buzkar.keenetic.pro";
export async function getData() {
    const res = await fetch("http://clubbe.online/json/hava.json")
    // const res = await fetch(apiEndpoint + "/get-data", {
    //     headers: {
    //         'append': {
    //             'Authorization': 'Basic' + atob("rts:Rst.2023")
    //         }
    //     },
    //     method: 'POST'
    // })
    return res.json()
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