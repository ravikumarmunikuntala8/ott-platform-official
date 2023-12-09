import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import NavGallery from "../components/NavGallery";
import PlatformContent from "../components/PlatformContent";

function Platform() {
  return (
    <div className="px-2 md:px-4 lg:px-8 pb-6 font-poppins">
      <NavBar />
      <Banner />
      <NavGallery />
      <PlatformContent />
    </div>
  );
}

export default Platform;
