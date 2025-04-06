// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
// import React, { useState, useEffect } from 'react';
// // Set up the worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
//  const PDFPreviewModal = ({ pdfUrl, onClose }) => {
//   const [numPages, setNumPages] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-xl shadow-xl p-6 max-w-4xl w-full mx-4 transform transition-all">
//         <h2 className="text-xl font-bold text-gray-900 mb-4">PDF Preview</h2>
//         <Document
//           file={pdfUrl}
//           onLoadSuccess={onDocumentLoadSuccess}
//           className="w-full h-[70vh] overflow-auto"
//         >
//           {Array.from(new Array(numPages), (el, index) => (
//             <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//           ))}
//         </Document>
//         <div className="mt-6 flex justify-end">
//           <button
//             className="px-4 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PDFPreviewModal;
// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
// import { PDFViewer } from '@react-pdf/renderer';

// const PDFPreviewModal = ({ pdfUrl, onClose }) => {
//   const [numPages, setNumPages] = useState();
//   const [error, setError] = useState(null);
//   const [pageNumber, setPageNumber]= useState(1);
//   function onDocumentLoadSuccess({numPages}){
//     setNumPages(numPages);
//   }
//   const getFinalPdfUrl = (url) => {
//     const normalizedUrl = url.replace(/\\/g, '/');
//     if (/^https?:\/\//i.test(normalizedUrl)) return normalizedUrl;

//     const baseUrl = process.env.NODE_ENV === 'development'
//       ? 'http://localhost:5000/'
//       : '/';
//     return baseUrl + normalizedUrl;
//   };




//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
//       <div className="bg-white rounded-xl shadow-xl p-4 max-w-[90vw] w-full h-[90vh] mx-4 overflow-hidden flex flex-col">
//         <div className="flex justify-between items-center mb-3">
//           <h2 className="text-lg font-semibold text-gray-800">PDF Preview</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-600 hover:text-gray-800 text-2xl"
//             aria-label="Close"
//           >
//             &times;
//           </button>
//         </div>

//         <div className="flex-1 overflow-auto px-2">
//        <Document file={getFinalPdfUrl(pdfUrl)} onLoadSuccess={onDocumentLoadSuccess}>
//         {
//           Array.apply(null,Array(numPages)).map((x,i)=>i+1).
//           map((page)=>{
//             return (
//               <Page
//               pageNumber={page}
//               renderTextLayer={false}
//               renderAnnotationLayer={false}
//               />
//             )
//           })
//         }
//        </Document>
//         </div>

//         <div className="mt-4 flex justify-end">
//           <button
//             className="px-4 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PDFPreviewModal;
import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up PDF worker
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFPreviewModal = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('single'); // 'single' or 'scroll'
  const [jumpPageInput, setJumpPageInput] = useState('');
  const containerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function onDocumentLoadError(error) {
    setError('Failed to load PDF: ' + error.message);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => Math.max(1, Math.min(numPages, prevPageNumber + offset)));
  }

  function jumpToPage() {
    const pageNum = parseInt(jumpPageInput, 10);
    if (!isNaN(pageNum)) {
      const validPage = Math.max(1, Math.min(numPages, pageNum));
      setPageNumber(validPage);
      //setJumpPageInput('');
      
      // Scroll to top when jumping to page
      if (containerRef.current) {
        containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }

  const getFinalPdfUrl = (url) => {
    const normalizedUrl = url.replace(/\\/g, '/');
    if (/^https?:\/\//i.test(normalizedUrl)) return normalizedUrl;

    const baseUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/'
      : '/';
    return baseUrl + normalizedUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/70">
      <div className="bg-gray-900 rounded-xl shadow-xl p-4 max-w-[90vw] w-full max-h-[90vh] mx-4 overflow-hidden flex flex-col border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-200">PDF Preview</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => changePage(-1)} 
              disabled={pageNumber <= 1 || viewMode === 'scroll'}
              className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50 text-gray-200 hover:bg-gray-700 transition-colors"
            >
              Previous
            </button>
            <span className="text-gray-300">
              Page {pageNumber} of {numPages || '--'}
            </span>
            <button 
              onClick={() => changePage(1)} 
              disabled={pageNumber >= numPages || viewMode === 'scroll'}
              className="px-3 py-1 bg-gray-800 rounded disabled:opacity-50 text-gray-200 hover:bg-gray-700 transition-colors"
            >
              Next
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <input
                type="number"
                min="1"
                max={numPages}
                value={jumpPageInput}
                onChange={(e) => setJumpPageInput(e.target.value)}
                placeholder="Page #"
                className="w-16 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-gray-200"
              />
              <button
                onClick={jumpToPage}
                disabled={!jumpPageInput || viewMode === 'scroll'}
                className="px-2 py-1 bg-blue-600 rounded disabled:opacity-50 text-white hover:bg-blue-700 transition-colors"
              >
                Go
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setScale(prev => Math.max(0.5, prev - 0.1))}
              className="px-3 py-1 bg-gray-800 rounded text-gray-200 hover:bg-gray-700 transition-colors"
            >
              -
            </button>
            <span className="text-gray-300">{Math.round(scale * 100)}%</span>
            <button 
              onClick={() => setScale(prev => Math.min(2.0, prev + 0.1))}
              className="px-3 py-1 bg-gray-800 rounded text-gray-200 hover:bg-gray-700 transition-colors"
            >
              +
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('single')}
              className={`px-3 py-1 rounded transition-colors ${
                viewMode === 'single' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
              }`}
            >
              Single Page
            </button>
            <button
              onClick={() => setViewMode('scroll')}
              className={`px-3 py-1 rounded transition-colors ${
                viewMode === 'scroll' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
              }`}
            >
              Scroll All
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div 
          ref={containerRef}
          className="flex-1 overflow-auto flex justify-center bg-gray-800 p-4 rounded-lg"
        >
          {error ? (
            <div className="text-red-400 p-4 bg-gray-900 rounded">{error}</div>
          ) : (
            <div 
              className={`shadow-lg ${viewMode === 'scroll' ? 'w-full' : 'w-[210mm] max-w-full'}`}
            >
              <Document
                file={getFinalPdfUrl(pdfUrl)}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<div className="text-center py-8 text-gray-400">Loading PDF...</div>}
              >
                {viewMode === 'single' ? (
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    width={window.innerWidth > 210 * scale ? 210 * 3.78 * scale : null}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={<div className="text-center py-8 text-gray-400">Loading page...</div>}
                    className="border border-gray-700 bg-white"
                  />
                ) : (
                  <div className="space-y-4">
                    {Array.from(new Array(numPages), (_, index) => (
                      <div key={`page_${index + 1}`} className="border border-gray-700 bg-white">
                        <Page
                          pageNumber={index + 1}
                          scale={scale}
                          width={window.innerWidth > 210 * scale ? 210 * 3.78 * scale : null}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                          loading={<div className="text-center py-8 text-gray-400">Loading page {index + 1}...</div>}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Document>
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFPreviewModal;