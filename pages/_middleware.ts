
import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
 
export function middleware(req: NextRequest) { 
    console.log(req.cookies); 
    return
}