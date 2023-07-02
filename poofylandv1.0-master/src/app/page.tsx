import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutSection from "../../components/AboutSection";
import Roadmapsection from "../../components/RoadmapSection";
import Extrasection from "../../components/ExtraSection";
import Updatesection from "../../components/UpdateSection";
import { TbBrandDiscord } from "react-icons/tb";
export const metadata = {
  title: "Poofyland",
  description: "This is only frontend",
};

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <video src="/videos/banner-2.mp4" autoPlay loop playsInline muted></video>
      <Header></Header>
      <AboutSection></AboutSection>
      <Roadmapsection></Roadmapsection>
      <Extrasection></Extrasection>
      <a
        id="floater"
        href="https://discord.com/invite/TCSt3jBJZ8"
        target="_blank"
      >
        <TbBrandDiscord size={40} />
      </a>
      <Updatesection></Updatesection>
      <Footer></Footer>
    </>
  );
}
