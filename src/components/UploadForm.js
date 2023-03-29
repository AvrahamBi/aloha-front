import React from "react";
import Uppy from "@uppy/core";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { Dashboard } from "@uppy/react";

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uploadedFiles: [] };
    this.uppy = new Uppy({
      autoProceed: false,
      restrictions: { maxNumberOfFiles: 1 },
    }).on("complete", (result) => {
      console.log("SUCCESS!!")
      const uploadedFiles = result.successful.map((file) => ({
        id: file.id,
        name: file.name,
        type: file.type,
        size: file.size,
        url: URL.createObjectURL(file.data),
      }));
      this.setState({ uploadedFiles });
    });
  }


  render() {
    return (
      <div>
        <Dashboard
          uppy={this.uppy}
          plugins={["Webcam"]}
          inline={true}
          height={200}
        />

      </div>
    );
  }
}

export default UploadForm;
