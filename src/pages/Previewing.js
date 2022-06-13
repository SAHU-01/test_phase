import React from 'react';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

 function Previewing() {
    const docs = [
        { uri: require("../assets/doc.docx") }, // Local File
      ];
  return (
    <div>
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
    </div>
  )
}

export default Previewing






  