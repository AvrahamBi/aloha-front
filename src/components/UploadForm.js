import React from 'react';
import Uppy from '@uppy/core';
import { DragDrop } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the component state with an empty uploadedFile property
    this.state = {
      uploadedFile: null,
    };
    // Initialize a new Uppy instance with file restrictions and autoProceed set to true
    this.uppy = new Uppy({
      restrictions: {
        maxNumberOfFiles: 1, // Allow only one file to be uploaded
        allowedFileTypes: ['txt/*'], // Allow only image and video files
        maxFileSize: 5242880, // 5MB in bytes
      },
      autoProceed: true, // Automatically start the upload once a file is selected
    });
    // Add an event listener for the `complete` event to handle the uploaded file data
    this.uppy.on('complete', this.handleUploadComplete);
  }

  // Handle the `complete` event by extracting the uploaded file data and updating the component state
  handleUploadComplete = (result) => {
    const file = result.successful[0].data;
    this.setState({ uploadedFile: file });
  };

  render() {
    // Extract the uploadedFile state variable
    const { uploadedFile } = this.state;
    return (
      <div style={{width: "30%", marginLeft: "auto", marginRight: "auto"}}>
        {!uploadedFile && (
          // Render the DragDrop component if a file has not yet been uploaded
          <DragDrop
            uppy={this.uppy}
            locale={{
              strings: {
                dropHereOr: 'Drop file here or click to browse',
              },
            }}
          />
        )}
        {uploadedFile && (
          // Display the name of the uploaded file if one has been uploaded
          <p>Uploaded file: {uploadedFile.name}</p>
        )}
      </div>
    );
  }
}

export default UploadForm;
