import { NextResponse, NextRequest } from "next/server";
import axios from "axios";


const apiEndpoint = "https://www:@rts.buzkar.keenetic.pro";

const http = axios.create({
    baseURL: apiEndpoint,
})


export async function POST(req) {
    const { limit } = await req.json();
    console.log("_limit: ", limit);
    if (limit) {
        const res = await http.post('/new-limit?limit=' + limit);
        return NextResponse.json(res.data, { status: 200 })
    }
    return NextResponse.json({ message: limit + "" }, { status: 200 })
}
