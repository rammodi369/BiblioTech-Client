import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Finance() {
  const navigate =useNavigate();
  const handleGoBack = () => {
    navigate('/librarian');
  };
  
  const handleContactUs = () => {
    navigate('/feedback');
  };

  return (
    <div className="py-10">
      <div className="text-center">
        <h2 className="mt-20 text-2xl font-bold tracking-tight text-black sm:text-5xl ">
        Finance Feature Coming Soon...
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600">
            Wait for it , Finance Feature coming soon..
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Return to dashboard
          </button>
          <button
            type="button"
            onClick={handleContactUs}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  )
}
