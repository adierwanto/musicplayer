import { Inter } from 'next/font/google'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WINTERWRLD',
  description: 'Find your music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet"/>
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
        <link href="/assets/css/style.css" rel="stylesheet"/>
    </head>
      <body className={inter.className}>
    <div className="container d-flex flex-column min-vh-100">
      <nav className="navbar mt-3 sticky-top bg-white">
        <div className="container-fluid">
          <a href="/" className="navbar-brand"><h3>WINTERWRLD // </h3></a>
          <form className="d-flex" role="search">
            <input className="form-control me-2 rounded" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-dark rounded" type="submit"><i className="bi bi-search"></i></button>
          </form>
        </div>
      </nav>

        {children}
        <footer className="footer mt-auto" role="contentinfo">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <p className="mb-1">&copy; Copyright Winterwrld. All Rights Reserved</p>
        </div>
        <div className="col-sm-6 social text-md-end">
          <a href="https://www.twitter.com/winterwrld" target="_blank"><span className="bi bi-twitter"></span></a>
        </div>
      </div>
    </div>
  </footer>
</div>


  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      </body>

        <Script src="/assets/vendor/aos/aos.js"/>
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"/>
        <Script src="/assets/js/main.js"/>
    </html>
  )
}
