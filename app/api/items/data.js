export async function getData(){
    const res = await fetch("http://clubbe.online/json/hava.json")
    return res.json()
}