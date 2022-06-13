import {React,useState} from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import pdfFile from '../pdf/test.pdf';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


function PdfPrint() {  
    const [defaultPdfFile]=useState(pdfFile);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
        <div className="">
            <div className="">
            {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
            </div>

        </div>
    </div>
  );
}

export default PdfPrint