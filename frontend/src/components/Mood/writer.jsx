import { useState, useRef, useEffect  } from "react";

export default function WordLikeEditor({ value, onChange }) {
  const [pages, setPages] = useState(value ? [value] : [""]);
  const pageRefs = useRef([]);

   useEffect(() => {
    // set initial content into divs when value changes
    pages.forEach((_, i) => {
      const el = pageRefs.current[i];
      if (el && el.innerText !== (pages[i] || "")) {
        el.innerText = pages[i] || "";
      }
    });
  }, [pages]);

  useEffect(() => {
    if (value !== pages.join("\n")) {
      setPages([value || ""]);
    }
  }, [value]);

  const handleInput = (index, e) => {
    const newPages = [...pages];
    newPages[index] = e.target.innerText;
    setPages(newPages);

    // Check if content overflows the current page
    const el = pageRefs.current[index];
    if (el && el.scrollHeight > el.clientHeight) {
      if (index === pages.length - 1) {
        setPages([...newPages, ""]);
        setTimeout(() => {
          const newPageEl = pageRefs.current[index + 1];
          if (newPageEl) {
            newPageEl.focus();
            const range = document.createRange();
            range.setStart(newPageEl, 0);
            range.collapse(true);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
          }
        }, 0);
        return;
      }
    }

    setPages(newPages);
    onChange(newPages.join("\n")); 
  };

  return (
    <div >
      {pages.map((_, i) => (
        <div
        key={i}
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