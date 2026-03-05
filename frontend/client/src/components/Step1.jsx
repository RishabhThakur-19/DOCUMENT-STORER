import { useState,useContext,useEffect } from "react";
export default function Step1({ next }) {
const [data,Setdata]=useState({
    name: "",
    fatherName: "",
    motherName: "",
    spouseName: "", 
    dob: "",
    birthPlace: "",
    mobile: "",
    email: "",
    address: "",
  });
  const handleChange = (e) => {
    Setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!data.name || !data.mobile || !data.email) {
      alert("Please fill required fields");
      return;
    }
    next(data);
  };

  const inputStyle =
    "w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Personal Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input className={inputStyle} name="name" placeholder="Full Name" onChange={handleChange} />

        <input className={inputStyle} name="fatherName" placeholder="Father Name" onChange={handleChange} />

        <input className={inputStyle} name="motherName" placeholder="Mother Name" onChange={handleChange} />

        <input className={inputStyle} name="spouseName" placeholder="Spouse Name(N/A,if not married)" onChange={handleChange} />

        <input type="date" className={inputStyle} name="dob" onChange={handleChange} />
        
        <input className={inputStyle} name="birthPlace" placeholder="Birth Place" onChange={handleChange} />

        <input className={inputStyle} name="mobile" placeholder="Mobile Number" onChange={handleChange} />

        <input className={inputStyle} name="email" placeholder="Email Address" onChange={handleChange} />

      </div>

      <textarea
        className={`${inputStyle} mt-4`}
        name="address"
        placeholder="Full Address"
        rows="3"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Next →
      </button>
    </form>
  );
};
