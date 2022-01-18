import './Resume.css';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

const Resume = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const url='/media/resume.pdf'

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    return (
        <>
            <div className='resume'>
                <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </>
    );
};

export default Resume;
