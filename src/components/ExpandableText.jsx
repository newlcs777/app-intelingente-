import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExpandableText({ children, collapsedHeight = 300 }) {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(collapsedHeight);
  const contentRef = useRef(null);

  useEffect(() => {
    if (expanded) {
      setHeight(contentRef.current.scrollHeight); // altura total do conteúdo
    } else {
      setHeight(collapsedHeight);
    }
  }, [expanded, collapsedHeight]);

  return (
    <div className="relative transition-all duration-700 ease-in-out">
      {/* Container com altura animada */}
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className="overflow-hidden transition-all duration-700 ease-in-out"
      >
        {children}
      </div>

      {/* Botão Ler mais / Mostrar menos */}
      <div className="flex justify-end mt-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-yellow-500 flex items-center gap-1 font-medium hover:underline transition-colors"
        >
          {expanded ? (
            <>
              Mostrar menos <ChevronUp size={16} />
            </>
          ) : (
            <>
              Ler mais <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
