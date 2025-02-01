import Customize from "../app/components/Customize";
import Extension from "../app/components/Extension";
import Footer from "../app/components/Footer";
import HeroSection from "../app/components/HeroSection";
import Navbar from "../app/components/Navbar";
import ProjectManagment from "../app/components/ProjectManagment";
import SponsorsSection from "../app/components/SponsorsSection";
import WorkTogether from "../app/components/Work-Together";
import YourWork from "../app/components/YourWork";


export default function Home() {
  return (
    <>

    <Navbar/>
    <HeroSection/>
    <ProjectManagment/>
    <WorkTogether/>
    <Extension/>
    <Customize/>
    <YourWork/>
    <SponsorsSection/>
    <Footer/>
    </>
  );
}
