import {useState} from 'react';
export default function Step2({ next,back }) {
const [data2, setData2]=useState({
  pan: "",
  aadhar: "",
  bankAccount: "",
  nomineeName: "",
  nomineeAadhar: "",
  nomineeBankAccount: "",
  nomineeBank:""
});
  const handleChange = (e) => {
    setData2({...data2, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    next(data2);
  };

  const inputStyle =
    "w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";
  return(
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-6 text-center">Financial Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className={inputStyle} name="pan" placeholder="PAN Number" onChange={handleChange} />
        <input className={inputStyle} name="aadhar" placeholder="Aadhar Number" onChange={handleChange} />
        <input className={inputStyle} name="bankAccount" placeholder="Bank Account Number" onChange={handleChange} />
        <input className={inputStyle} name="nomineeName" placeholder="Nominee Name" onChange={handleChange} />
        <input className={inputStyle} name="nomineeAadhar" placeholder="Nominee Aadhar Number" onChange={handleChange} />
        <input className={inputStyle} name="nomineeBank" placeholder="Nominee Bank Name" onChange={handleChange} />
        <input className={inputStyle} name="nomineeBankAccount" placeholder="Nominee Bank Account Number" onChange={handleChange} />
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