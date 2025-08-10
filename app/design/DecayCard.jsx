
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const DecayCard = ({
//   width = 300,
//   height = 400,
//   image = 'https://picsum.photos/300/400?grayscale',
//   children,
// }) => {
//   const svgRef = useRef(null);
//   const displacementMapRef = useRef(null);
//   const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
//   const cachedCursor = useRef({ ...cursor.current });
//   const winsize = useRef({ width: window.innerWidth, height: window.innerHeight });

//   useEffect(() => {
//     const lerp = (a, b, n) => (1 - n) * a + n * b;
//     const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
//     const distance = (x1, x2, y1, y2) => Math.hypot(x1 - x2, y1 - y2);

//     const isMobile = () => window.innerWidth <= 768;

//     const handleResize = () => {
//       winsize.current = { width: window.innerWidth, height: window.innerHeight };
//     };

//     const handleMouseMove = (ev) => {
//       cursor.current = { x: ev.clientX, y: ev.clientY };
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);

//     const imgValues = {
//       imgTransforms: { x: 0, y: 0, rz: 0 },
//       displacementScale: 0,
//     };

//     const render = () => {
//       let targetX = lerp(
//         imgValues.imgTransforms.x,
//         map(cursor.current.x, 0, winsize.current.width, -120, 120),
//         0.1
//       );
//       let targetY = lerp(
//         imgValues.imgTransforms.y,
//         map(cursor.current.y, 0, winsize.current.height, -120, 120),
//         0.1
//       );
//       let targetRz = isMobile()
//         ? 0
//         : lerp(
//             imgValues.imgTransforms.rz,
//             map(cursor.current.x, 0, winsize.current.width, -10, 10),
//             0.1
//           );

//       const bound = 50;
//       if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
//       if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
//       if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
//       if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

//       imgValues.imgTransforms.x = targetX;
//       imgValues.imgTransforms.y = targetY;
//       imgValues.imgTransforms.rz = targetRz;

//       if (svgRef.current) {
//         gsap.set(svgRef.current, {
//           x: imgValues.imgTransforms.x,
//           y: imgValues.imgTransforms.y,
//           rotateZ: imgValues.imgTransforms.rz,
//         });
//       }

//       const cursorTravelledDistance = distance(
//         cachedCursor.current.x,
//         cursor.current.x,
//         cachedCursor.current.y,
//         cursor.current.y
//       );
//       imgValues.displacementScale = lerp(
//         imgValues.displacementScale,
//         map(cursorTravelledDistance, 0, 200, 0, 400),
//         0.06
//       );

//       if (displacementMapRef.current) {
//         gsap.set(displacementMapRef.current, { attr: { scale: imgValues.displacementScale } });
//       }

//       cachedCursor.current = { ...cursor.current };

//       requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={svgRef}
//       className="relative overflow-hidden rounded-2xl" // Added overflow-hidden and rounded-2xl here
//       style={{ width: `${width}px`, height: `${height}px` }}
//     >
//       <svg
//         viewBox="-60 -75 720 900"
//         preserveAspectRatio="xMidYMid slice"
//         className="relative w-full h-full block [will-change:transform]"
//       >
//         {/* Add clipPath for rounded corners */}
//         <defs>
//           <clipPath id="roundedCorners">
//             <rect x="0" y="0" width="600" height="750" rx="32" ry="32" />
//           </clipPath>
//         </defs>
        
//         <filter id="imgFilter">
//           <feTurbulence
//             type="turbulence"
//             baseFrequency="0.015"
//             numOctaves="5"
//             seed="4"
//             stitchTiles="stitch"
//             x="0%"
//             y="0%"
//             width="100%"
//             height="100%"
//             result="turbulence1"
//           />
//           <feDisplacementMap
//             ref={displacementMapRef}
//             in="SourceGraphic"
//             in2="turbulence1"
//             scale="0"
//             xChannelSelector="R"
//             yChannelSelector="B"
//             x="0%"
//             y="0%"
//             width="100%"
//             height="100%"
//             result="displacementMap3"
//           />
//         </filter>
//         <g>
//           <image
//             href={image}
//             x="0"
//             y="0"
//             width="600"
//             height="750"
//             filter="url(#imgFilter)"
//             clipPath="url(#roundedCorners)" // Apply clipPath here
//             preserveAspectRatio="xMidYMid slice"
//           />
//         </g>
//       </svg>
//       <div className="absolute bottom-[1.2em] left-[1em] tracking-[-0.5px] font-black text-[2.5rem] leading-[1.5em] first-line:text-[6rem]">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default DecayCard;



"use client"
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import GSAP only on client-side
const gsapPromise = typeof window !== "undefined" 
  ? import("gsap").then(mod => mod.gsap) 
  : Promise.resolve(null);

const DecayCard = ({
  width = 300,
  height = 400,
  image = 'https://picsum.photos/300/400?grayscale',
  children,
}) => {
  const svgRef = useRef(null);
  const displacementMapRef = useRef(null);
  const cursor = useRef({ x: 0, y: 0 });
  const cachedCursor = useRef({ x: 0, y: 0 });
  const winsize = useRef({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const [gsap, setGsap] = useState(null);

  useEffect(() => {
    // Only run on client
    setIsClient(true);
    
    // Initialize GSAP
    gsapPromise.then(gsap => {
      if (gsap) setGsap(gsap);
    });

    if (typeof window !== "undefined") {
      cursor.current = { 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      };
      cachedCursor.current = { ...cursor.current };
      winsize.current = { 
        width: window.innerWidth, 
        height: window.innerHeight 
      };
    }

    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1, x2, y1, y2) => Math.hypot(x1 - x2, y1 - y2);

    const isMobile = () => window.innerWidth <= 768;

    const handleResize = () => {
      winsize.current = { width: window.innerWidth, height: window.innerHeight };
    };

    const handleMouseMove = (ev) => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      window.addEventListener("mousemove", handleMouseMove);
    }

    let animationFrame;

    const render = () => {
      if (!svgRef.current || !displacementMapRef.current || !gsap) return;
      
      let targetX = lerp(
        imgValues.imgTransforms.x,
        map(cursor.current.x, 0, winsize.current.width, -120, 120),
        0.1
      );
      let targetY = lerp(
        imgValues.imgTransforms.y,
        map(cursor.current.y, 0, winsize.current.height, -120, 120),
        0.1
      );
      let targetRz = isMobile()
        ? 0
        : lerp(
            imgValues.imgTransforms.rz,
            map(cursor.current.x, 0, winsize.current.width, -10, 10),
            0.1
          );

      const bound = 50;
      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      gsap.set(svgRef.current, {
        x: imgValues.imgTransforms.x,
        y: imgValues.imgTransforms.y,
        rotateZ: imgValues.imgTransforms.rz,
      });

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );
      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorTravelledDistance, 0, 200, 0, 400),
        0.06
      );

      gsap.set(displacementMapRef.current, { attr: { scale: imgValues.displacementScale } });

      cachedCursor.current = { ...cursor.current };

      animationFrame = requestAnimationFrame(render);
    };

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0,
    };

    render();

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
      }
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [gsap]);

  if (!isClient) {
    return (
      <div 
        className="relative overflow-hidden rounded-2xl bg-gray-200" 
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    );
  }

  return (
    <div
      ref={svgRef}
      className="relative overflow-hidden rounded-2xl"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="relative w-full h-full block [will-change:transform]"
      >
        <defs>
          <clipPath id="roundedCorners">
            <rect x="0" y="0" width="600" height="750" rx="32" ry="32" />
          </clipPath>
        </defs>
        
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="5"
            seed="4"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence1"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap3"
          />
        </filter>
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            filter="url(#imgFilter)"
            clipPath="url(#roundedCorners)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="absolute bottom-[1.2em] left-[1em] tracking-[-0.5px] font-black text-[2.5rem] leading-[1.5em] first-line:text-[6rem]">
        {children}
      </div>
    </div>
  );
};

export default DecayCard;