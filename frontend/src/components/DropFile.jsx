import { useDropzone } from "react-dropzone";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const imgTypes = {
  "image/jpeg": [],
  "image/png": [],
  "image/gif": [],
  "image/bmp": [],
  "image/webp": [],
  "image/svg+xml": [],
};

const docTypes = {
  "application/pdf": [],
  "application/msword": [],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
  "application/vnd.ms-excel": [],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
};

const DropFiles = ({
  wrapperClass,
  type = "image",
  multiple = false,
  children,
  onChange,
}) => {
  const { toast } = useToast();
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: type === "image" ? { ...imgTypes } : { ...docTypes },
    multiple: multiple,
    onDrop: (files) => {
      if (files.length > 0) {
        const filesWithPreview = files.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        setAcceptedFiles(filesWithPreview);
        onChange(filesWithPreview);
      } else {
        toast({
          title: "Thông báo",
          description: "File type not supported",
          variant: "error",
          duration: 2000,
        });
      }
    },
  });

  useEffect(() => {
    // Clean up the preview URLs when the component is unmounted
    return () => {
      acceptedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [acceptedFiles]);

  const previews = acceptedFiles.map((file) => (
    <div key={file.name} className="preview">
      <img
        src={file.preview}
        alt={file.name}
        className="preview-img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  ));

  return (
    <div
      {...getRootProps()}
      className={wrapperClass}
      style={{
        position: "relative",
        width: "150px",
        height: "145px",
        borderRadius: "1px",
      }}
    >
      <input {...getInputProps()} />
      {children}
      {acceptedFiles.length > 0 && (
        <div
          className="previews"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            borderRadius: "1px",
          }}
        >
          {previews}
        </div>
      )}
    </div>
  );
};

export default DropFiles;
