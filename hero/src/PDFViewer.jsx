import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import web from "../src/assets/web.pdf";
import adb from "../src/assets/adb.pdf";
import NUTEC from "../src/assets/NUTEC.pdf";
import mmd from "../src/assets/mmd.pdf";
import Handbook from "../src/assets/Handbook.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PDFViewer() {
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='p-4 mt-4 bg-gray-200 border border-gray-400 max-w-5xl mx-auto overflow-hidden'>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <div className='max-h-screen overflow-y-auto px-[10%]'>
                <Document
                    // file={web}
                    // file={adb}
                    file={mmd}
                    // file={NUTEC}
                    // file={Handbook}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {
                        Array.apply(null, Array(numPages))
                            .map((x, i) => i + 1)
                            .map((page) => (
                                <>
                                <Page
                                    key={page}
                                    pageNumber={page}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                                <div className='mb-10'></div>
                                </>
                            ))
                    }
                </Document>
            </div>
        </div>
    );
}

export default PDFViewer;
