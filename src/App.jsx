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

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />
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
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
