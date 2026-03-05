import logo from "../assets/lic.png";
export default function Loader({text="Loading..."}) {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50 flex flex-col items-center justify-center z-50">
            {/*logo*/}
            <div className="flex flex-col items-center animate-fadeIn"
            ><img src={logo} alt="LIC" className="w-24 mb-4 drop-shadow-lg" />

<div className="relative">
    <div className=" w-20 h-20 border-[6px] border-blue-400/30 rounded-full"> </div>
    <div className="absolute inset-0 w-20 h-20 border-[6px] border-blue-700 border-t-transparent rounded-full animate-spin" > </div>
    </div>
    <p className=" text-lg text-gray-500  font-semibold tracking-wide mt-8">{text}</p>
    <p className=" text-sm text-gray-500 mt-2">please wait while we prepeare your document</p>

</div>
            </div>
    );
}