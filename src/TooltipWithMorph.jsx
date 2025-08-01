import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as flubber from "flubber";
import "./TooltipMorph.css";

const paths = [
  "M0,0 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0", // circle
  "M78.6,-61.1C93.1,-43.4,89.8,-14.7,78.6,10.1C67.4,34.8,48.4,55.6,25.4,67.7C2.4,79.8,-24.5,83.2,-45.3,71.3C-66.1,59.3,-80.7,32.1,-78.2,7.8C-75.6,-16.6,-56,-38.1,-35.2,-56.2C-14.5,-74.3,7.4,-89.1,29.1,-89.7C50.8,-90.3,72.2,-76.9,78.6,-61.1Z",
  "M54.1,-56.7C67.2,-43.3,73.3,-21.7,72.4,-0.8C71.5,20.1,63.6,40.2,50.5,56.2C37.3,72.3,18.7,84.2,-2.6,86.5C-23.8,88.8,-47.6,81.6,-60.9,65.7C-74.2,49.7,-77,25,-74.7,2.1C-72.4,-20.7,-64.9,-41.3,-51.6,-54.7C-38.3,-68.1,-19.2,-74.3,0.4,-74.6C20,-74.9,40,-69.4,54.1,-56.7Z",
//   "M317.59,715.85c-24.51,0-48.95-6.54-70.66-18.92-20.9-11.92-37.81-28.29-48.89-47.34-17.37-29.86-18.04-61.94-1.88-90.35,12.49-21.97,8.45-44.65-12.37-69.33-18.55-22-47.4-42.88-77.94-64.99C57.05,389.6,6.6,353.07,1.01,311.51c-2.38-17.71,3.38-34.92,17.61-52.62,15.51-19.3,33.11-28.28,55.37-28.28,17.99,0,36.96,5.76,57.05,11.85,22.32,6.77,45.4,13.77,69.69,13.77,8.98,0,17.38-.94,25.7-2.87,26.29-6.11,36.43-44.14,48.18-88.19C294.18,91.81,318.53.5,427.89.5c34.79,0,76.77,9.47,124.78,28.14,48.43,18.84,88.64,47.44,116.29,82.71,28.12,35.87,42.66,78.03,42.06,121.91-1.18,86.86-62.95,114.96-117.45,139.75-39.84,18.12-74.24,33.77-78.95,68.67-12.79,94.83-39.49,166.98-79.35,214.44-41.46,49.36-86.88,59.73-117.68,59.73Z",
//   "M427.91,0v1c34.71,0,76.63,9.46,124.58,28.11,48.35,18.8,88.49,47.35,116.08,82.56,28.04,35.78,42.55,77.83,41.96,121.6-1.18,86.55-62.79,114.57-117.16,139.3-19.62,8.92-38.15,17.35-52.43,27.93-16.12,11.95-24.64,25.02-26.81,41.13-6.63,49.19-17.2,92.85-31.4,129.75-12.94,33.64-29.04,62.05-47.84,84.43-17.05,20.3-36.34,35.7-57.33,45.76-19.07,9.15-39.25,13.78-59.97,13.78-24.43,0-48.77-6.52-70.41-18.86-20.83-11.87-37.67-28.18-48.71-47.16-8.24-14.17-12.73-28.94-13.35-43.88-.65-15.98,3.2-31.45,11.46-45.97,6.76-11.88,8.74-23.64,6.06-35.95-2.38-10.93-8.43-22.04-18.48-33.96-18.59-22.04-47.46-42.94-78.03-65.07C57.43,389.25,7.06,352.79,1.51,311.44c-2.36-17.57,3.36-34.65,17.5-52.24,15.41-19.17,32.88-28.1,54.98-28.1,17.91,0,36.85,5.75,56.9,11.83,22.35,6.78,45.47,13.79,69.84,13.79,9.02,0,17.46-.94,25.81-2.88,26.58-6.18,36.76-44.34,48.55-88.54C294.62,92.11,318.92,1.01,427.89,1l.02-1M427.89,0c-176.21.02-132.65,236.86-201.57,252.87-8.65,2.01-17.17,2.86-25.58,2.86-46.19,0-88.76-25.62-126.74-25.62-19.89,0-38.53,7.04-55.76,28.47-98.44,122.45,236.68,196.33,177.49,300.42-41.25,72.54,33.42,157.36,121.87,157.36,79.3,0,169.69-68.21,197.52-274.6,11.15-82.65,194.37-58.42,196.41-208.48,1.23-90.55-60.79-167.03-158.67-205.1C501.94,8.37,461.04,0,427.89,0h0Z",
];

export default function TooltipWithMorph() {
  const [hovered, setHovered] = useState(false);
  const [path, setPath] = useState(paths[0]);
  const [pathScale, setPathScale] = useState(0);
  const morphIndex = useRef(0);
  const animFrame = useRef(null);

  // Handle morphing and scale growth
  useEffect(() => {
    if (!hovered) return;

    let frame = 0;
    let morphFrame = 0;
    const totalMorphFrames = 500;
    const growSpeed = 0.005;

    const loop = () => {
      if (!hovered) return;

      // Morphing
      const nextIndex = (morphIndex.current + 2) % paths.length;
      const morph = flubber.interpolate(
        paths[morphIndex.current],
        paths[nextIndex]
      );
      const morphProgress = morphFrame / totalMorphFrames;
      setPath(morph(morphProgress));

      // Scaling
      setPathScale((s) => Math.min(s + growSpeed, 12)); // or even 20+

      morphFrame++;
      if (morphFrame > totalMorphFrames) {
        morphIndex.current = nextIndex;
        morphFrame = 0;
      }

      animFrame.current = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(animFrame.current);
  }, [hovered]);

  // Reset shape and scale on unhover
  useEffect(() => {
    if (!hovered) {
      // Smoothly shrink shape down
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
      <div className="icon-wrapper">
        <img
          src="/assets/eye.svg"
          className="icon"
          alt="eye"
          onMouseEnter={() => {
            setHovered(true);
            morphIndex.current = 0;
            setPath(paths[0]);
            setPathScale(0.01); // start tiny
          }}
          onMouseLeave={() => setHovered(false)}
        />
      </div>

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
              viewBox="0 0 200 200"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <clipPath id="tooltipClip">
                  <path
                    d={path}
                    transform={`translate(100, 100) scale(${pathScale})`}
                  />
                </clipPath>
              </defs>

              <image
                href="/images/home.jpg"
                x="0"
                y="0"
                width="200"
                height="200"
                clipPath="url(#tooltipClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
