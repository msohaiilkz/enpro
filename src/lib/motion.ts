import type { Variants } from "framer-motion";

/** Shared motion presets so every section animates consistently. */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Parent wrapper that releases its children one after another. */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
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
  viewport: { once: true, amount: 0.01, margin: "400px 0px 400px 0px" },
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
