"use client";

import { useEffect, useRef } from "react";

function cubicBezier(x1, y1, x2, y2) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;
  const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t) => ((ay * t + by) * t + cy) * t;

  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let lo = 0;
    let hi = 1;
    let t = x;

    for (let i = 0; i < 12; i++) {
      const mid = (lo + hi) / 2;
      const sx = sampleX(mid);
      if (Math.abs(sx - x) < 1e-6) {
        t = mid;
        break;
      }
      if (sx < x) lo = mid;
      else hi = mid;
      t = mid;
    }

    return sampleY(t);
  };
}

function resolveEasingFn(transition) {
  const linear = (t) => t;
  if (!transition || transition.type === "spring") return linear;
  const ease = transition.ease;

  if (
    Array.isArray(ease) &&
    ease.length === 4 &&
    ease.every((value) => typeof value === "number")
  ) {
    return cubicBezier(ease[0], ease[1], ease[2], ease[3]);
  }

  if (typeof ease === "string") {
    switch (ease) {
      case "easeIn":
      case "circIn":
        return (t) => t * t;
      case "easeOut":
      case "circOut":
        return (t) => 1 - (1 - t) * (1 - t);
      case "easeInOut":
      case "circInOut":
        return (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
      case "linear":
      default:
        return linear;
    }
  }

  return linear;
}

function resolveDuration(transition) {
  if (!transition || transition.type === "spring") return 1;
  return typeof transition.duration === "number" && transition.duration > 0
    ? transition.duration
    : 1;
}

const DEFAULTS = {
  text: "PIXEL DRIFT",
  colors: ["#FFFFFF", "#F9731A", "#FFFFFF"],
  mode: "onEnter",
  replay: true,
  position: "above",
  particleSize: 10,
  particleCount: 50,
  mouseEnabled: true,
  mouseRadius: 50,
  mouseForce: 30,
  fontSize: 80,
  autoFit: true,
  transition: { type: "tween", duration: 0.9, ease: "easeOut" },
};

export default function PixelDrift(props) {
  const {
    text,
    colors,
    mode,
    replay,
    position,
    particleSize,
    particleCount,
    mouseEnabled,
    mouseRadius,
    mouseForce,
    fontSize,
    autoFit,
    transition,
    style,
    className,
  } = { ...DEFAULTS, ...props };

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pointerRef = useRef({ x: -99999, y: -99999, active: false });
  const formValRef = useRef(0);
  const lastFrameRef = useRef(null);
  const hiddenRef = useRef(false);
  const reverseRef = useRef(false);
  const colorsKey = Array.isArray(colors) ? colors.join("|") : "";
  const transitionKey = JSON.stringify(transition ?? {});

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const palette =
      Array.isArray(colors) && colors.length > 0
        ? colors
        : ["#40ffaa", "#40aaff", "#ff40aa", "#aa40ff"];

    let count = 0;
    let ox = new Float32Array(0);
    let oy = new Float32Array(0);
    let sx = new Float32Array(0);
    let sy = new Float32Array(0);
    let px = new Float32Array(0);
    let py = new Float32Array(0);
    let repX = new Float32Array(0);
    let repY = new Float32Array(0);
    let cIdx = new Uint8Array(0);
    let prevMx = -99999;
    let prevMy = -99999;
    let mouseSpeed = 0;
    let smoothX = -99999;
    let smoothY = -99999;
    let cssW = 0;
    let cssH = 0;
    let dpr = 1;

    const fitFontSize = (measureCtx, label, family, maxW, maxH, cap) => {
      if (!label) return cap;
      let lo = 8;
      let hi = cap;
      let best = lo;

      for (let iter = 0; iter < 12; iter++) {
        const mid = (lo + hi) / 2;
        measureCtx.font = `700 ${mid}px ${family}`;
        const metrics = measureCtx.measureText(label);
        const width = metrics.width;
        const height =
          (metrics.actualBoundingBoxAscent || mid * 0.8) +
          (metrics.actualBoundingBoxDescent || mid * 0.2);

        if (width <= maxW && height <= maxH) {
          best = mid;
          lo = mid;
        } else {
          hi = mid;
        }
      }

      return Math.max(8, Math.floor(best));
    };

    const sampleText = () => {
      if (cssW <= 0 || cssH <= 0) return;

      const off = document.createElement("canvas");
      off.width = Math.max(1, Math.floor(cssW * dpr));
      off.height = Math.max(1, Math.floor(cssH * dpr));
      const offCtx = off.getContext("2d", { willReadFrequently: true });
      if (!offCtx) return;

      offCtx.scale(dpr, dpr);
      const fontFamily =
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
      const maxW = cssW * 0.96;
      const maxH = cssH * 0.92;
      let effectiveSize = Math.max(8, fontSize);

      if (autoFit) {
        effectiveSize = fitFontSize(offCtx, text || "", fontFamily, maxW, maxH, effectiveSize);
      }

      offCtx.font = `700 ${effectiveSize}px ${fontFamily}`;
      const metrics = offCtx.measureText(text || "");
      const glyphW = metrics.width || 1;
      const glyphH =
        (metrics.actualBoundingBoxAscent || effectiveSize * 0.8) +
        (metrics.actualBoundingBoxDescent || effectiveSize * 0.2);
      const fitScale = Math.min(1, maxW / glyphW, maxH / glyphH);
      if (fitScale < 1) effectiveSize = Math.max(8, effectiveSize * fitScale);

      offCtx.clearRect(0, 0, cssW, cssH);
      offCtx.fillStyle = "#fff";
      offCtx.font = `700 ${effectiveSize}px ${fontFamily}`;
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillText(text || "", cssW / 2, cssH / 2);

      const img = offCtx.getImageData(0, 0, Math.floor(cssW * dpr), Math.floor(cssH * dpr));
      const data = img.data;
      const density = Math.max(1, Math.min(50, particleCount));
      const stride = Math.max(2, Math.round(150 / density));

      let candidates = 0;
      for (let y = 0; y < cssH; y += stride) {
        for (let x = 0; x < cssW; x += stride) {
          const ix = Math.floor(x * dpr);
          const iy = Math.floor(y * dpr);
          const idx = (iy * img.width + ix) * 4 + 3;
          if (data[idx] > 128) candidates++;
        }
      }

      const downsample = candidates > 30000 ? Math.ceil(candidates / 30000) : 1;
      const allocCount = Math.min(candidates, 30000);
      const newOx = new Float32Array(allocCount);
      const newOy = new Float32Array(allocCount);
      const newSx = new Float32Array(allocCount);
      const newSy = new Float32Array(allocCount);
      const newPx = new Float32Array(allocCount);
      const newPy = new Float32Array(allocCount);
      const newC = new Uint8Array(allocCount);

      let i = 0;
      let seen = 0;
      for (let y = 0; y < cssH && i < allocCount; y += stride) {
        for (let x = 0; x < cssW && i < allocCount; x += stride) {
          const ix = Math.floor(x * dpr);
          const iy = Math.floor(y * dpr);
          const idx = (iy * img.width + ix) * 4 + 3;

          if (data[idx] > 128) {
            if (seen % downsample === 0) {
              const angle = Math.random() * Math.PI * 2;
              const radius = Math.max(cssW, cssH) * (0.6 + Math.random() * 0.5);
              const spawnX = cssW / 2 + Math.cos(angle) * radius;
              const spawnY = cssH / 2 + Math.sin(angle) * radius;

              newOx[i] = x;
              newOy[i] = y;
              newSx[i] = spawnX;
              newSy[i] = spawnY;
              newPx[i] = spawnX;
              newPy[i] = spawnY;
              newC[i] = Math.floor(Math.random() * palette.length);
              i++;
            }
            seen++;
          }
        }
      }

      count = i;
      ox = newOx;
      oy = newOy;
      sx = newSx;
      sy = newSy;
      px = newPx;
      py = newPy;
      repX = new Float32Array(allocCount);
      repY = new Float32Array(allocCount);
      cIdx = newC;
      formValRef.current = 0;
      lastFrameRef.current = null;
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);
      if (width <= 0 || height <= 0) return;

      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      cssW = width;
      cssH = height;
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sampleText();
    };

    resize();
    reverseRef.current = false;
    hiddenRef.current = true;
    formValRef.current = 0;

    const formIn = () => {
      reverseRef.current = false;
      hiddenRef.current = false;
    };
    const formOut = () => {
      reverseRef.current = true;
    };

    let tryEnter = null;
    let io = null;
    let sentinel = null;
    const enterTimers = [];

    const ro = new ResizeObserver(() => {
      resize();
      tryEnter?.();
    });
    ro.observe(container);

    const onMove = (event) => {
      if (!mouseEnabled) return;
      const rect = canvas.getBoundingClientRect();
      const scaleX = rect.width > 0 ? cssW / rect.width : 1;
      const scaleY = rect.height > 0 ? cssH / rect.height : 1;
      const mx = (event.clientX - rect.left) * scaleX;
      const my = (event.clientY - rect.top) * scaleY;

      if (prevMx > -9000) {
        const dx = mx - prevMx;
        const dy = my - prevMy;
        mouseSpeed = Math.sqrt(dx * dx + dy * dy);
      }

      prevMx = mx;
      prevMy = my;
      pointerRef.current.x = mx;
      pointerRef.current.y = my;
      pointerRef.current.active = true;
    };

    const onLeave = () => {
      pointerRef.current.x = -99999;
      pointerRef.current.y = -99999;
      pointerRef.current.active = false;
      prevMx = -99999;
      prevMy = -99999;
    };

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointercancel", onLeave);

    if (mode === "onHover") {
      container.addEventListener("pointerenter", formIn);
      container.addEventListener("pointerleave", formOut);
    } else {
      sentinel = document.createElement("div");
      sentinel.style.position = "absolute";
      sentinel.style.left = "0";
      sentinel.style.width = "1px";
      sentinel.style.height = "1px";
      sentinel.style.pointerEvents = "none";
      if (position === "middle") sentinel.style.top = "50%";
      else if (position === "below") sentinel.style.bottom = "0";
      else sentinel.style.top = "0";
      container.appendChild(sentinel);

      let entered = false;
      const enter = () => {
        if (entered) return;
        entered = true;
        formIn();
        if (!replay) io?.disconnect();
      };

      tryEnter = () => {
        if (entered) return;
        const rect = container.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return;
        const viewportH = window.innerHeight || 0;
        const viewportW = window.innerWidth || 0;
        const y =
          position === "middle"
            ? rect.top + rect.height / 2
            : position === "below"
              ? rect.bottom
              : rect.top;
        const onScreen =
          rect.right >= 0 && rect.left <= viewportW && rect.bottom >= 0 && y <= viewportH;
        if (onScreen) enter();
      };

      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            enter();
          } else if (replay) {
            entered = false;
            hiddenRef.current = true;
            reverseRef.current = false;
            formValRef.current = 0;
          }
        },
        { threshold: 0 },
      );

      io.observe(sentinel);
      tryEnter();
      enterTimers.push(
        setTimeout(() => tryEnter?.(), 60),
        setTimeout(() => tryEnter?.(), 250),
        setTimeout(() => tryEnter?.(), 600),
      );
    }

    const buckets = palette.map(() => []);
    const easeFn = resolveEasingFn(transition);
    const formMs = Math.max(0, resolveDuration(transition) * 1000);

    const drawFrame = () => {
      ctx.clearRect(0, 0, cssW, cssH);

      const now = performance.now();
      const last = lastFrameRef.current ?? now;
      const dt = Math.min(64, Math.max(0, now - last));
      lastFrameRef.current = now;

      const target = reverseRef.current ? 0 : 1;
      let value = formValRef.current;
      if (formMs <= 0) {
        value = target;
      } else if (value < target) {
        value = Math.min(target, value + dt / formMs);
      } else if (value > target) {
        value = Math.max(target, value - dt / formMs);
      }
      formValRef.current = value;

      if (reverseRef.current && value <= 0) hiddenRef.current = true;
      if (hiddenRef.current) return;

      const forming = value < 1;
      const factor = easeFn(value);
      const point = pointerRef.current;
      const hitSpeed = mouseSpeed;
      mouseSpeed *= 0.88;

      const active = !forming && mouseEnabled && point.active;
      if (active) {
        const lerpFactor = Math.max(0.08, 0.3 - hitSpeed * 0.006);
        if (smoothX < -9000) {
          smoothX = point.x;
          smoothY = point.y;
        } else {
          smoothX += (point.x - smoothX) * lerpFactor;
          smoothY += (point.y - smoothY) * lerpFactor;
        }
      } else {
        smoothX = -99999;
        smoothY = -99999;
      }

      const cutoff = Math.max(1, mouseRadius);
      const cutoffSq = cutoff * cutoff;
      const drawSize = Math.max(1, particleSize / 4);
      const half = drawSize / 2;

      for (let b = 0; b < buckets.length; b++) buckets[b].length = 0;

      for (let i = 0; i < count; i++) {
        const homeX = ox[i];
        const homeY = oy[i];

        if (forming) {
          px[i] = sx[i] + (homeX - sx[i]) * factor;
          py[i] = sy[i] + (homeY - sy[i]) * factor;
          buckets[cIdx[i]].push(i);
          continue;
        }

        let inZone = false;
        if (active) {
          const dx = homeX - smoothX;
          const dy = homeY - smoothY;
          const distSq = dx * dx + dy * dy;

          if (distSq > 0 && distSq < cutoffSq) {
            const dist = Math.sqrt(distSq);
            const nx = dx / dist;
            const ny = dy / dist;
            const falloff = 1 - dist / cutoff;
            const push = falloff * hitSpeed * mouseForce * 0.05;

            repX[i] += nx * push;
            repY[i] += ny * push;
            repX[i] += (nx * (cutoff - dist) - repX[i]) * 0.06;
            repY[i] += (ny * (cutoff - dist) - repY[i]) * 0.06;
            inZone = true;
          }
        }

        if (!inZone) {
          repX[i] *= 0.97;
          repY[i] *= 0.97;
        }

        px[i] = homeX + repX[i];
        py[i] = homeY + repY[i];
        buckets[cIdx[i]].push(i);
      }

      ctx.globalAlpha = forming ? Math.min(1, Math.max(0, factor)) : 1;
      for (let b = 0; b < buckets.length; b++) {
        const bucket = buckets[b];
        if (bucket.length === 0) continue;
        ctx.fillStyle = palette[b];
        for (let k = 0; k < bucket.length; k++) {
          const i = bucket[k];
          ctx.fillRect(px[i] - half, py[i] - half, drawSize, drawSize);
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      drawFrame();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointercancel", onLeave);
      container.removeEventListener("pointerenter", formIn);
      container.removeEventListener("pointerleave", formOut);
      io?.disconnect();
      sentinel?.remove();
      enterTimers.forEach(clearTimeout);
      ro.disconnect();
    };
  }, [
    text,
    colorsKey,
    mode,
    replay,
    position,
    particleSize,
    particleCount,
    mouseEnabled,
    mouseRadius,
    mouseForce,
    fontSize,
    autoFit,
    transitionKey,
  ]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        height: "100%",
        minWidth: 0,
        minHeight: 1,
        overflow: "hidden",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </span>
  );
}
