import { Footer } from './Footer'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <Header />
      <main className="d-flex flex-column justify-content-evenly align-items-center m-4 p-4" style={{ position: "relative" }} >
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
