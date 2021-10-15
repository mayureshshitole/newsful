import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


const CommonLayout = ({ children }) => {
  return (
    <div className="font-nunito bg-[#091C29]">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
