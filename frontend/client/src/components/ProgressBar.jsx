export default function ProgressBar({ step }) {
  return (
    <div className="w-full mb-8">

      {/* labels */}
      <div className="flex justify-between mb-2 text-[10px] sm:text-xs md:text-sm font-medium text-center">
        <span className="w-1/4 px-1 break-words">Personal</span>
        <span className="w-1/4 px-1 break-words">Document</span>
        <span className="w-1/4 px-1 break-words">Personal & Physical</span>
        <span className="w-1/4 px-1 break-words">Occupation & Income</span>
      </div>

      {/* progress bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${((step - 1) / 3) * 100}%` }}
        />
      </div>

    </div>
  );
}