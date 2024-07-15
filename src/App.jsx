import "./App.css";
import { Outlet} from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import MobileNav from "./component/MobileNav";
import { useEffect } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { setBannerData , setImageURL} from "./store/movieoSlice";
import useScrollToTop from "./Hooks/useScrollToTop";

function App() {
  useScrollToTop()
  const dispatch = useDispatch()

  const fetechTrandingData = async() => {
    try {
      const response = await axios('trending/all/week')
      dispatch(setBannerData(response.data.results))

    } catch (error) {
        console.log("error", error)
    }
  }

  const fetchConfiguration = async() => {
    try {
      const response = await axios.get('configuration')
      dispatch(setImageURL(response.data.images.secure_base_url+'original'))
      
    } catch (error) {
      console.log("error",error)
    }
  }

  useEffect(() => {
    fetechTrandingData()
    fetchConfiguration()
  }, [])
  

  return (
    <>
      <Header />
      <main className="min-h-[100vh]">
        <Outlet />
      </main>
      <Footer />
      <MobileNav/>
    </>
  );
}

export default App;
