import { useEffect, useState } from "react";

export type PerformanceTier = "low" | "mid" | "high";

export interface PerformanceProfile {
  tier: PerformanceTier;
  isMobile: boolean;
  isLowEnd: boolean;
  prefersReducedMotion: boolean;
  saveData: boolean;
  enableHeavyEffects: boolean;
  enableParticles: boolean;
  enableSpline: boolean;
  enablePhysics: boolean;
  enableMouseTracking: boolean;
  particleScale: number;
}

const MOBILE_BREAKPOINT = 768;

type NavWithExtras = Navigator & {
  deviceMemory?: number;
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
};

const detect = (): PerformanceProfile => {
  if (typeof window === "undefined") {
    return {
      tier: "high",
      isMobile: false,
      isLowEnd: false,
      prefersReducedMotion: false,
      saveData: false,
      enableHeavyEffects: true,
      enableParticles: true,
      enableSpline: true,
      enablePhysics: true,
      enableMouseTracking: true,
      particleScale: 1,
    };
  }

  const nav = navigator as NavWithExtras;
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const saveData = !!nav.connection?.saveData;
  const effectiveType = nav.connection?.effectiveType;
  const slowConnection =
    effectiveType === "slow-2g" ||
    effectiveType === "2g" ||
    effectiveType === "3g";
  const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;
  const lowCores =
    typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4;
  const hasTouch = "ontouchstart" in window || nav.maxTouchPoints > 0;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  let tier: PerformanceTier = "high";
  if (prefersReducedMotion || saveData || slowConnection) {
    tier = "low";
  } else if (lowMemory && lowCores) {
    tier = "low";
  } else if (isMobile || lowMemory || lowCores || (hasTouch && coarsePointer)) {
    tier = "mid";
  }

  const isLowEnd = tier === "low";

  return {
    tier,
    isMobile,
    isLowEnd,
    prefersReducedMotion,
    saveData,
    enableHeavyEffects: tier === "high",
    enableParticles: tier !== "low",
    enableSpline: tier === "high" && !isMobile && !saveData,
    enablePhysics: tier === "high" && !isMobile,
    enableMouseTracking: tier !== "low" && !coarsePointer,
    particleScale: tier === "low" ? 0 : tier === "mid" ? 0.4 : 1,
  };
};

let cached: PerformanceProfile | null = null;

const getProfile = () => {
  if (cached) return cached;
  cached = detect();
  return cached;
};

export function usePerformance(): PerformanceProfile {
  const [profile, setProfile] = useState<PerformanceProfile>(() => getProfile());

  useEffect(() => {
    const update = () => {
      cached = detect();
      setProfile(cached);
    };
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mqMotion.addEventListener("change", update);
    mqMobile.addEventListener("change", update);
    return () => {
      mqMotion.removeEventListener("change", update);
      mqMobile.removeEventListener("change", update);
    };
  }, []);

  return profile;
}
