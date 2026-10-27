import { Outlet, ScrollRestoration } from 'react-router-dom'
import SiteHeader from '../pages/SiteHeader'
import SiteFooter from '../pages/SiteFooter'

function SiteLayout() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  )
}

export default SiteLayout