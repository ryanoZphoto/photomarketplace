import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('Middleware - Request:', {
    url: request.url,
    headers: Object.fromEntries(request.headers),
    timestamp: new Date().toISOString()
  })

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}