import { useEffect, useRef } from "react";
import getRandInt from "../../utils/getRandInt";

interface FloatingCharAnim {
  value: string
  classes: string
}

const FloatingCharAnim = ({ value, classes = "" } : FloatingCharAnim) => {
  const charsRef = useRef<HTMLDivElement>(null);
  const animate = useEffect(() => {
    charsRef.current!.classList.add("align");
    let tmp = charsRef.current!.innerText as string;
    charsRef.current!.innerText = "";
    tmp.split("").forEach((ch) => {
      const span = document.createElement("span");
      span.style.setProperty(
        "transform",
        `translate(${getRandInt(
          -innerWidth * 5,
          innerWidth * 5
        )}px, ${getRandInt(-innerHeight * 5, innerHeight * 5)}px)`
      );
      span.innerHTML = ch === " " ? "&ensp;" : ch;
      span.addEventListener(
        "animationend",
        () => (span.style.transform = "translate(0,0)")
      );
      charsRef.current!.append(span);
    });
  });

  return (
    <div className={classes + " floating-char-anim"} ref={charsRef}>
      {value}
    </div>
  );
};

export default FloatingCharAnim;
