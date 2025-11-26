import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
