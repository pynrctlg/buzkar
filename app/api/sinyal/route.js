import { NextResponse } from "next/server";
import axios from "axios";


const apiEndpoint = "https://www:@rts.buzkar.keenetic.pro";

const http = axios.create({
    baseURL: apiEndpoint,
})


export async function handler(req) {
    const sinyalDeg = req.body.sinyalDeg
    console.log(sinyalDeg)
}
