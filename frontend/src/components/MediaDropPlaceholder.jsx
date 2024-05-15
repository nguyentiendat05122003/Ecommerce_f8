import { Image } from "lucide-react";

const MediaDropPlaceholder = () => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <Image />
      <p className="subheading-3">Browse image</p>
    </div>
  );
};

export default MediaDropPlaceholder;
