import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.top = `${e.pageY - 20}px`;
      cursor.style.left = `${e.pageX - 20}px`;
    };

    const handleClick = () => {
      cursor.classList.add("click");
      setTimeout(() => {
        cursor.classList.remove("click");
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor style1"
      aria-hidden="true"
    />
  );
};

export default CustomCursor;

