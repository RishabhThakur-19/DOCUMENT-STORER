import {Routes,Route} from "react-router-dom";
import FormWizard from "./pages/FormWizard";
import Preview from "./pages/Preview";
import { AnimatePresence } from "framer-motion";
import {useState,useEffect} from "react";
import Loader from "./components/Loader";


export default function App() {
  const [starting,setStarting]=useState(true);
  useEffect(()=>{
    const timer=setTimeout(()=>
    setStarting(false),3000);
    return ()=>clearTimeout(timer);
},[]);
if (starting)return <Loader text="Welcome to HEAVEN'S CODE policy Portal" />
  return (
    <AnimatePresence mode="wait">
    <Routes>
      <Route path="/" element={<FormWizard />} />
      <Route path="/preview/:id" element={<Preview />} />
    </Routes>
</AnimatePresence>
  );
}
