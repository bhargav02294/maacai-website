import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Industries from './components/Industries';
import FeaturedProduct from './components/FeaturedProduct';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';


function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <Services />
        <Industries />
        <FeaturedProduct />
        <Stats />
        <WhyChoose />
        <Process />
        <Portfolio />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <ScrollProgress />

        <Navbar />

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <main id="main-content">
                <AboutPage />
              </main>
            }
          />

          {/* BLOG */}
          <Route
            path="/blog"
            element={
              <main id="main-content">
                <BlogPage />
              </main>
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <main id="main-content">
                <ContactPage />
              </main>
            }
          />

        </Routes>

        <Footer />

        <BackToTop />

      </div>

    </BrowserRouter>
  );
}

export default App;