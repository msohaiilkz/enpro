import type { Transition, Variants } from "framer-motion";

/** Shared motion presets so every section animates consistently. */

/**
 * While set, reveals resolve with a zero-duration transition, so sections
 * appear already settled. Used when a link drops the visitor directly onto a
 * landing section: the scroll jump is instant, so content sliding in right
 * after read as a second "jerk". The hidden/show variants stay intact, which
 * keeps the replay-on-scroll behaviour alive for the rest of the visit.
 */
let settleUntil = 0;
export const settleArrival = (ms = 1500) => {
  settleUntil = performance.now() + ms;
};
const settling = () => performance.now() < settleUntil;

const INSTANT: Transition = { duration: 0, delay: 0 };

/** A "show" state whose transition collapses to instant while settling. */
const show = (target: Record<string, unknown>, transition: Transition) => ({
  ...target,
  get transition() {
    return settling() ? INSTANT : transition;
  },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 44 },
  show: show({ opacity: 1, y: 0 }, { duration: 0.75, ease: [0.22, 1, 0.36, 1] }),
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: show({ opacity: 1, x: 0 }, { duration: 0.7, ease: [0.22, 1, 0.36, 1] }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: show({ opacity: 1, x: 0 }, { duration: 0.7, ease: [0.22, 1, 0.36, 1] }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: show({ opacity: 1 }, { duration: 0.7, ease: "easeOut" }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: show({ opacity: 1, scale: 1 }, { duration: 0.55, ease: [0.22, 1, 0.36, 1] }),
};

/** Parent wrapper that releases its children one after another. */
export const stagger = (staggerChildren = 0.15, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    get transition() {
      return settling()
        ? { staggerChildren: 0, delayChildren: 0 }
        : { staggerChildren, delayChildren };
    },
  },
});

/**
 * Reveal when the element scrolls into view.
 *
 * "some" = the block counts as visible while ANY part of it is on screen.
 * A ratio like 0.15 breaks on tall blocks (their visible slice can never
 * reach 15%), which re-hid content that was still on screen. Replays each
 * time the block fully leaves and re-enters the viewport.
 */
export const revealOnce = {
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: false, amount: "some" as const, margin: "0px 0px -40px 0px" },
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
