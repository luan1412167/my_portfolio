import React, { useState } from "react";
import { DropzoneDialog } from 'material-ui-dropzone';
import "pdf-parse";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";


const UploadFiles = () => {

    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

     const handleSave = async (files) => {
        setFiles(files);
        setOpen(false);
        const loader = new WebPDFLoader(files);
        const docs = await loader.load()
        console.log("Called here, docs", docs);
    };

    return (
        <div style={{ textAlign: 'right' }}>
          <button onClick={handleOpen}>Upload Files</button>
          <DropzoneDialog
            open={open}
            onSave={handleSave}
            acceptedFiles={['application/pdf', "docx", "txt", "csv"]}
            showPreviews={true}
            maxFileSize={5000000}
            onClose={handleClose}
          />
        </div>
      );
};

export default UploadFiles;