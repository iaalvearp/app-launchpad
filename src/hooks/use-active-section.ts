import { useEffect, useState } from "react";

/**
 * Tracks which section id occupies the largest portion of the viewport.
 * Uses IntersectionObserver with multiple thresholds and recomputes on scroll
 * by comparing the visible ratio of every observed section.
 */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!elements.length) return;

    const ratios = new Map<string, number>();
    ids.forEach((id) => ratios.set(id, 0));

    const computeActive = () => {
      let bestId = "";
      let bestRatio = 0;
      ratios.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      if (bestId && bestRatio > 0) setActive(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });
        computeActive();
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};
