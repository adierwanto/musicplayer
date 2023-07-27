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
        <link href="/assets/img/favicon.png" rel="icon"/>
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet"/>
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
        <link href="/assets/css/style.css" rel="stylesheet"/>
    </head>
      <body className={inter.className}>
      <div className="collapse navbar-collapse custom-navmenu" id="main-navbar">
    <div className="container py-2 py-md-5">
      <div className="row align-items-start">
        <div className="col-md-2">
          <ul className="custom-menu">
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="works.html">Works</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-6 d-none d-md-block  mr-auto">
          <div className="tweet d-flex">
            <span className="bi bi-twitter text-white mt-2 mr-3"></span>
            <div>
              <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore. <br/> <a href="#">t.co/v82jsk</a></em></p>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-none d-md-block">
          <h3>Hire Me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiisexplicabo inventore. <br/> <a href="#">myemail@gmail.com</a></p>
        </div>
      </div>

    </div>
  </div>
  <nav className="navbar navbar-light custom-navbar">
    <div className="container">
      <a className="navbar-brand" href="/">WINTERWRLD.</a>
      <a href="#" className="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
        <span></span>
      </a>
    </div>
  </nav>
        {children}
        <footer className="footer" role="contentinfo">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <p className="mb-1">&copy; Copyright MyPortfolio. All Rights Reserved</p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="col-sm-6 social text-md-end">
          <a href="#"><span className="bi bi-twitter"></span></a>
          <a href="#"><span className="bi bi-facebook"></span></a>
          <a href="#"><span className="bi bi-instagram"></span></a>
          <a href="#"><span className="bi bi-linkedin"></span></a>
        </div>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      </body>

        <Script src="/assets/vendor/aos/aos.js"/>
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
        <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"/>
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js"/>
        <Script src="/assets/vendor/php-email-form/validate.js"/>
        <Script src="/assets/js/main.js"/>
    </html>
  )
}
