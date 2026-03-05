import {useState} from 'react';
export default function Step3({ next,back }) {
const [data3, setData3]=useState({
  education:"",
  height: "",
  weight: "",
  occupation: "",
  brothersAge:"",
  sisterAge:"",
  childrenAge:"",
  previousPolicies: "",
});
  const handleChange = (e) => {
    setData3({...data3, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    next(data3);
  };

  const inputStyle =
    "w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";
  return(
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-6 text-center">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className={inputStyle} name="education" placeholder="Education" onChange={handleChange} />
        <input className={inputStyle} name="occupation"  placeholder="occupation" onChange={handleChange}/>
        <input className={inputStyle} name="annualIncome" placeholder="Annual Income" onChange={handleChange}/>
        <input className={inputStyle} name="height" placeholder="Height (cm)" onChange={handleChange}/>
        <input className={inputStyle} name="weight" placeholder="Weight (kg)" onChange={handleChange}/>
        <input className={inputStyle} name="previousPolicies" placeholder="Previous Policies" onChange={handleChange}/>
        <input className={inputStyle} name="brothersAge" placeholder="Brothers Age" onChange={handleChange}/>
        <input className={inputStyle} name="sisterAge" placeholder="Sisters Age" onChange={handleChange}/>
        <input className={inputStyle} name="childrenAge" placeholder="Children Age" onChange={handleChange}/>
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={back}
          className="px-6 py-3 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition font-semibold"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Next →
        </button>
      </div>
    </form>
  );
}