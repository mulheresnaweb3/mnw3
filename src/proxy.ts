import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Verifica se o modo de manutenção está ativado
  // Nota: process.env.MAINTENANCE_MODE retorna string 'true' se definido no .env
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'

  // Se não estiver em manutenção, segue o fluxo normal
  if (!isMaintenanceMode) {
    return NextResponse.next()
  }

  // Se estiver em manutenção:
  
  // 1. Permite acesso à própria página de manutenção para evitar loop
  if (request.nextUrl.pathname === '/maintenance') {
    return NextResponse.next()
  }

  // 2. Permite acesso a assets estáticos (imagens, scripts, estilos)
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/static') ||
    request.nextUrl.pathname.includes('.') // Arquivos com extensão (favicon.ico, .svg, etc)
  ) {
    return NextResponse.next()
  }

  // 3. Qualquer outra rota é redirecionada para /maintenance
  // Usamos rewrite para manter a URL limpa ou redirect para mudar a URL.
  // Redirect é mais comum para manutenção temporária.
  return NextResponse.redirect(new URL('/maintenance', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}