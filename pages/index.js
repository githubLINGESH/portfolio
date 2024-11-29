import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/skills';
import PublishedProjects from '../components/publishedpaper';
import ClientReviews from '../components/clientReviews';
import ContactSection from '../components/getInTouch';
import Footer from '../components/Footer';

import "@fontsource/league-spartan"; // Defaults to weight 400

const Home = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <PublishedProjects />
    <ClientReviews />
    <ContactSection />
    <Footer />
  </>
);

export default Home;
