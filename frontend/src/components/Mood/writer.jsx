import { useState, useRef } from "react";

export default function WordLikeEditor() {
  const [pages, setPages] = useState([""]); // Store text for each page
  const pageRefs = useRef([]);

  const handleInput = (index, e) => {
    const newPages = [...pages];
    newPages[index] = e.target.innerText;
    setPages(newPages);

    // Check if content overflows the current page
    const el = pageRefs.current[index];
    if (el && el.scrollHeight > el.clientHeight) {
      // If overflow, create a new page if not already
      if (index === pages.length - 1) {
        setPages([...newPages, ""]);
      }
    }
  };

  return (
    <div >
      {pages.map((content, i) => (
        <div
  ref={(el) => (pageRefs.current[i] = el)}
  contentEditable
  suppressContentEditableWarning
  onInput={(e) => handleInput(i, e)}
  dir="ltr"
  className="bg-white shadow-lg p-10 mb-6 outline-none text-left"
  style={{
    width: "900px",
    height: "500px",
    overflow: "hidden",
    direction: "ltr",
    unicodeBidi: "plaintext",
    textAlign: "left",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  }}
/>

      ))}
    </div>
  );
}
