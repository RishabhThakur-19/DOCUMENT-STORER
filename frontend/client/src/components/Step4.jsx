import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";
export default function Step4({data,back }) {
  const [data4, setData4] = useState({
  
    employer:"",
    incomeSource:"",
    annualIncome:"",
    dutyNature:"",
    serviceLength:"",
    tableTerm:"",
    husbandPolicy:"",
    itrs:"",
    nachSign:"",
    photograph:""

  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setData4({...data4,[e.target.name]: e.target.files ? e.target.files[0] : e.target.value});
  } ;
  const submitForm=async(e)=>{
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  // TO BE READ FOR UNDERSTANDING
  try{
    const formData = new FormData(); // ✅ FIRST create it

    // append all fields
    Object.entries({ ...data, ...data4 }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await axios.post(
      "http://localhost:5000/api/users/submit",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
    navigate(`/preview/${res.data._id}`);
  }catch(err){
    alert("Error in saving Data");
    console.log(err);
  }
  };

  if(loading) return <Loader text="Submitting Data and Generating PDF..." />

  const inputStyle="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";
  return(
    <form onSubmit={submitForm}>
      <h2 className="text-2xl fonr-semibold mb-6 text-center">Other Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className={inputStyle} name="employer" placeholder="Employer" onChange={handleChange} />
        <input className={inputStyle} name="incomeSource" placeholder="Income Source" onChange={handleChange} />
        <input className={inputStyle} name="annualIncome" placeholder="Annual Income" onChange={handleChange} />
        <input className={inputStyle} name="dutyNature" placeholder="Duty Nature" onChange={handleChange} />
        <input className={inputStyle} name="serviceLength" placeholder="Service Length (Years)" onChange={handleChange} />
        <input className={inputStyle} name="tableTerm" placeholder="Table Term (Years)" onChange={handleChange} />
        <input className={inputStyle} name="husbandPolicy" placeholder="Husband Policy Number (if any)" onChange={handleChange} />
        <input className={inputStyle} name="itrs" placeholder="ITRS" onChange={handleChange}/>
        <input className={inputStyle} name="nachSign" placeholder="NACH Sign" onChange={handleChange}/>
        <input type="file" className={inputStyle} name="photograph" placeholder="Photograph" accept="image/*" onChange={handleChange}/>
      </div>
      <div className="flex justify-between mt-6">
        <button type="button" onClick={back} className="px-6 py-3 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition font-semibold">
          Back
        </button>
        <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold">
          {loading ? "Submitting..." : "Submit & Generate PDF"}
        </button>
      </div>
    </form>
  )}