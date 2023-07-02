import Contact from "@/components/Contact/Contact";
import CountDown from "@/components/CountDown/CountDown";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/HeroSection/Hero";
import Service from "@/components/Service/Service";
import Solution from "@/components/Solution/Solution";
import Story from "@/components/Story/Story";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
  <>
    <Hero/>
  <CountDown/>
  <Story/>
  <Service/>
  <Solution/>
  <Testimonial/>
  <Contact/>
  <Footer/>
  </>
  )
}
