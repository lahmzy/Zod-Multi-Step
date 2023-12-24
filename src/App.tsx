import React from "react";
import {Routes,Route} from "react-router-dom"
import Sidebar from "./components/Sidebar";
import UserInfo from "./components/UserInfo";
import Summary from "./components/Summary";
import AddOns from "./components/AddOns";
import SelectPlan from "./components/SelectPlan";
import ThankYou from "./components/ThankYou";


const App: React.FC = () => {
  return (
    <div className="w-full md:bg-white bg-light-gray h-[100vh] md:p-3 pb-1 flex flex-col md:flex-row">
      <Sidebar />

      <Routes>
        <Route path="/" element={<UserInfo />} />
        <Route path="/select-plan" element={<SelectPlan />}/>
        <Route path="/add-ons" element={<AddOns/>}/>
        <Route path="/summary" element={<Summary />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  )
  
};
export default App;
