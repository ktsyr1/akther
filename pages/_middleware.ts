
import { NextRequest, NextResponse } from 'next/server'


export function middleware(req: NextRequest, res: NextResponse, next: () => void) {
    // console.log(req.cookies);
    let geo = req.nextUrl
    NextResponse.json(geo)
}