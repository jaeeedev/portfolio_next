import { useEffect, useRef } from "react";

function useObserve(boldHandler: (index: number) => void, index: number) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const cb: IntersectionObserverCallback = ([entry]): void => {
      if (entry.isIntersecting) {
        boldHandler(index);
      }
    };

    const io = new IntersectionObserver(cb, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    if (ref.current) {
      io.observe(ref.current);
    }
  });

  return ref;
}

export default useObserve;
