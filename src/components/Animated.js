import React, { useEffect, useRef, useState } from "react";

const Animated = ({
  children,
  direction = "up", // up, down, left, right
  duration = 5000,
  delay = 0,
  className = "",
  stagger = false,
  staggerStep = 150,
  onScroll = false, // if true, trigger when scrolled into view
  once = true, // if using onScroll, animate only once
  threshold = 0.25,
  rootMargin = "0px",
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (onScroll && ref.current) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              if (once && obs && entry.target) obs.unobserve(entry.target);
            } else {
              if (!once) setVisible(false);
            }
          });
        },
        { threshold, rootMargin }
      );

      obs.observe(ref.current);
      return () => obs.disconnect();
    }

    const t = setTimeout(() => setVisible(true), 50 + Number(delay));
    return () => clearTimeout(t);
  }, [onScroll, delay, once, threshold, rootMargin]);

  const dirClass = `slide-in-${direction}`;

  const wrapperClass = `animate ${dirClass} ${
    visible ? "is-visible" : ""
  } ${className} ${stagger ? "stagger" : ""}`;

  const vars = {
    ["--anim-duration"]: `${duration}ms`,
    ["--anim-delay"]: `${delay}ms`,
    ["--stagger-step"]: `${staggerStep}ms`,
  };

  if (stagger) {
    const items = React.Children.toArray(children).map((child, i) => (
      <div className="stagger-child" key={i} style={{ ["--i"]: i }}>
        {child}
      </div>
    ));

    return (
      <div ref={ref} className={wrapperClass} style={vars}>
        {items}
      </div>
    );
  }

  return (
    <div ref={ref} className={wrapperClass} style={vars}>
      {children}
    </div>
  );
};

export default Animated;
