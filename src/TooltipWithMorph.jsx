import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as flubber from "flubber";
import { createPortal } from "react-dom";
import "./index.css";

const paths = [
  "M0,0 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0", // perfect centered circle
  "M78.6,-61.1C93.1,-43.4,89.8,-14.7,78.6,10.1C67.4,34.8,48.4,55.6,25.4,67.7C2.4,79.8,-24.5,83.2,-45.3,71.3C-66.1,59.3,-80.7,32.1,-78.2,7.8C-75.6,-16.6,-56,-38.1,-35.2,-56.2C-14.5,-74.3,7.4,-89.1,29.1,-89.7C50.8,-90.3,72.2,-76.9,78.6,-61.1Z",
  "M54.1,-56.7C67.2,-43.3,73.3,-21.7,72.4,-0.8C71.5,20.1,63.6,40.2,50.5,56.2C37.3,72.3,18.7,84.2,-2.6,86.5C-23.8,88.8,-47.6,81.6,-60.9,65.7C-74.2,49.7,-77,25,-74.7,2.1C-72.4,-20.7,-64.9,-41.3,-51.6,-54.7C-38.3,-68.1,-19.2,-74.3,0.4,-74.6C20,-74.9,40,-69.4,54.1,-56.7Z",
];

export default function TooltipWithMorph({
  children,
  tooltipImage,
  className,
}) {
  const [hovered, setHovered] = useState(false);
  const [path, setPath] = useState(paths[0]);
  const [pathScale, setPathScale] = useState(0);
  const morphIndex = useRef(0);
  const animFrame = useRef(null);
  useEffect(() => {
    if (!hovered) return;

    const growSpeed = 0.005;

    const loop = () => {
      if (!hovered) return;

      setPath(paths[0]); // Always use perfect circle
      setPathScale((s) => Math.min(s + growSpeed, 12));

      animFrame.current = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(animFrame.current);
  }, [hovered]);

  useEffect(() => {
    if (!hovered) {
      let frame = 0;
      const total = 50;
      const startScale = pathScale;

      const shrink = () => {
        const progress = frame / total;
        setPathScale(startScale * (1 - progress));
        frame++;
        if (frame <= total) {
          animFrame.current = requestAnimationFrame(shrink);
        }
      };

      shrink();
    }
  }, [hovered]);

  return (
    <>
      <div
        className={`icon-wrapper ${className || ""}`}
        onMouseEnter={() => {
          setHovered(true);
          morphIndex.current = 0;
          setPath(paths[0]);
          setPathScale(0.01);
        }}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>

      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {pathScale > 0 && (
              <motion.div
                className="tooltip-blob"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  className="fullscreen-svg"
                  viewBox="-100 -100 200 200"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <clipPath id="tooltipClip">
                      <path d={path} transform={`scale(${pathScale})`} />
                    </clipPath>
                  </defs>

                  <image
                    href={tooltipImage}
                    x="-100"
                    y="-100"
                    width="200"
                    height="200"
                    clipPath="url(#tooltipClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
