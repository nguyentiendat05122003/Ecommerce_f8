"use client";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { useState } from "react";

import { commaFormatter, numFormatter } from "@/lib/utils";

const Counter = ({ num, className, isFormatted, ...props }) => {
  const [countFinished, setCountFinished] = useState(false);

  return (
    <CountUp
      start={countFinished ? num : 0}
      end={num}
      duration={2}
      onEnd={() => setCountFinished(true)}
      formattingFn={
        isFormatted ? (value) => numFormatter(value, 0, props.prefix) : null
      }
      {...props}
    >
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} active={!countFinished} delayedCall>
          <span className={`relative ${className || ""}`}>
            <span className="opacity-0">
              {props.prefix}
              {isFormatted
                ? numFormatter(num, props.decimals || 0, props.prefix)
                : commaFormatter(num)}
              {props.suffix}
            </span>
            <span
              className="absolute left-0 text-[32px] text-header"
              ref={countUpRef}
            />
          </span>
        </VisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
