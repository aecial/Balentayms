import React, { useEffect, useRef, useState } from "react";

const HEART_GRID = [
  [0, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
];

export default function HeartMosaic({ images = [], size = 80 }) {
  let imgIndex = 0;

  // responsive cell size (can be tuned)
  const [cellSize, setCellSize] = useState(size);

  // modal state
  const [activeSrc, setActiveSrc] = useState(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth;
      if (w < 640) {
        // use a reasonable fraction on small screens so cells remain tappable
        setCellSize(35); // mobile
      } else if (w < 1024) {
        setCellSize(Math.max(56, Math.round(size * 0.8))); // md
      } else {
        setCellSize(size); // lg and up
      }
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [size]);

  // lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeSrc ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeSrc]);

  // close on Escape
  useEffect(() => {
    if (!activeSrc) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveSrc(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeSrc]);

  return (
    <>
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${HEART_GRID[0].length}, ${cellSize}px)`,
        }}
      >
        {HEART_GRID.flat().map((cell, index) => {
          if (cell === 0) {
            return <div key={index} />;
          }

          const img = images[imgIndex++];
          return (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-pink-100"
              style={{ width: cellSize, height: cellSize }}
            >
              {img && (
                <img
                  src={img}
                  alt=""
                  role="button"
                  tabIndex={0}
                  aria-label="Open image"
                  className="w-full h-full object-cover select-none"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveSrc(img)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveSrc(img);
                    }
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Modal overlay */}
      {activeSrc && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveSrc(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          style={{ backdropFilter: "blur(4px)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-lg"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                maxWidth: "80vw",
                maxHeight: "70vh",
                overflow: "visible",
              }}
            >
              <img
                src={activeSrc}
                alt=""
                className="block object-contain max-w-full max-h-full md:max-w-[50%] md:max-h-[50%]"
                style={{
                  width: "auto",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
