import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    // Simulate backend file processing
    setTimeout(() => {
      alert('File uploaded and processed successfully!');
    }, 2000);
  };

  return (
    <div className="upload">
      <div className="input-group">
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="file-input" 
        />
        <button 
          onClick={handleFileUpload} 
          className="upload-button"
        >
          Upload and Process File
        </button>
      </div>

      <style jsx>{`
        .upload {
          background-color: #F5F5DC;
          padding: 10px;
          color: black;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .input-group {
          display: flex;
          align-items: center;
        }
        .file-input {
          margin-right: 16px;
          padding: 8px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
        }
        .upload-button {
          background-color: #46703b;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .upload-button:hover {
          background-color: #face1b;
        }
        .upload-button:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Upload;
