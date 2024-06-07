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
  defaultImages = [],
}) => {
  const { toast } = useToast();
  const [acceptedFiles, setAcceptedFiles] = useState([]);

  useEffect(() => {
    if (defaultImages.length > 0) {
      const filesWithPreview = defaultImages.map((image) => {
        if (typeof image === "string") {
          return { preview: image, name: image.split("/").pop() };
        } else {
          return image;
        }
      });
      setAcceptedFiles(filesWithPreview);
    }
  }, [defaultImages]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },

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
    return () => {
      acceptedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [acceptedFiles]);

  const previews = acceptedFiles.map((file, idx) => (
    <div
      key={idx}
      className="preview"
      style={{
        margin: "0 5px", // Add some margin to space out the images
      }}
    >
      <img
        src={file.preview || file.detailImage_url || file.thumb_url}
        alt={file.name}
        className="preview-img"
        style={{
          width: "145px",
          height: "150px",
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
        width: "100%", // Adjust to allow horizontal scrolling if needed
        borderRadius: "1px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input {...getInputProps()} />
      {acceptedFiles.length === 0 && children}
      {acceptedFiles.length > 0 && (
        <div
          className="previews"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap", // Prevent wrapping to new lines
            overflow: "hidden", // Enable horizontal scrolling if needed
            width: "100%",
          }}
        >
          {previews}
        </div>
      )}
    </div>
  );
};

export default DropFiles;
