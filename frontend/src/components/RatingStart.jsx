import { Star } from "lucide-react";
import React from "react";

export default function RatingStart({ number = 5, size = 18 }) {
  const starts = [];
  for (let index = 0; index < 5; index++) {
    if (index < number) {
      starts.push(
        <Star key={index} size={size} fill="#F8D518" strokeWidth={0} />
      );
    } else {
      starts.push(
        <Star
          key={index}
          size={size}
          fill="rgb(225, 224, 224)"
          strokeWidth={0}
        />
      );
    }
  }
  return <div className="flex items-center gap-1">{starts}</div>;
}
