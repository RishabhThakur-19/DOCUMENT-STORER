import { useParams } from "react-router-dom";

export default function Preview() {
  const { id } = useParams();

  const pdfUrl = `http://localhost:5000/api/users/pdf/${id}`;

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center">

      <h1 className="text-3xl font-bold mb-6">Document Preview</h1>

      <iframe
        src={pdfUrl}
        title="PDF Preview"
        className="w-full max-w-4xl h-[80vh] border rounded-xl shadow-lg"
      />

      <a
        href={`${pdfUrl}?download=true`}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Download PDF
      </a>

    </div>
  );
}
