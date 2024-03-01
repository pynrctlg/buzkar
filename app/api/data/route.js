import { NextResponse } from "next/server";
import axios from "axios";


const apiEndpoint = "https://www:@rts.buzkar.keenetic.pro";

const http = axios.create({
    baseURL: apiEndpoint,
})


export async function GET(request) {
    const res = await http.post('/get-data');
    return NextResponse.json(res.data, { status: 200 })
}

export async function HEAD(request) { }

export async function POST(request) { }

export async function PUT(request) { }

export async function DELETE(request) { }

export async function PATCH(request) { }

// If OPTIONS is not defined, Next.js will automatically implement OPTIONS and  set the appropriate Response Allow header depending on the other methods defined in the route handler.
export async function OPTIONS(request) { }