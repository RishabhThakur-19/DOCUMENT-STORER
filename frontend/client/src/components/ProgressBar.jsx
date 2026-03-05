export default function ProgressBar({ step }){
    return(
        <div className="w-full mb-8">
            <div className="flex justify-between space-x-2 mb-2 text-sm font-medium">
                <span>Personal</span>
                <span>Document</span>
                <span>Personal & Physical</span>
                <span>Occupation & Income</span>
            </div>
        
 <div className="w-full bg-gray-200 h-2 rounded-full">
    <div className="bg-blue-600 h-2 rounded-full transition-all duration-500 " style={{width: `${(step-1)*35}%`}}/>
 </div>
 </div>
    );
}