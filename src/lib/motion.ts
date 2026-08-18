import type { Variants } from "framer-motion";

/** Shared motion presets so every section animates consistently. */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Parent wrapper that releases its children one after another. */
export const stagger = (staggerChildren = 0.15, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/**
 * Reveal once when the element scrolls into view.
 *
 * `amount` is deliberately tiny and the root margin generous, so a block starts
 * animating well before it reaches the fold.
 */
export const revealOnce = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  // fires once ~15% of the block is inside the viewport, so the animation
  // plays where the reader can actually see it
  viewport: { once: true, amount: 0.15, margin: "0px 0px -40px 0px" },
};

/**
 * Animates as soon as the page mounts rather than on scroll.
 *
 * The detail pages carry long blocks of copy, and a missed scroll observer
 * there leaves a whole section looking empty. Playing on mount costs nothing
 * visually - the reader has not reached those sections yet - and the content
 * can never be left invisible.
 */
export const revealOnMount = {
  initial: "hidden" as const,
  animate: "show" as const,
};
