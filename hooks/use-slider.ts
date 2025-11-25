import { useState, useEffect, useCallback, useMemo } from "react";

interface UseSliderOptions {
  totalItems: number;
  breakpoints?: {
    width: number;
    itemsPerPage: number;
  }[];
  defaultItemsPerPage?: number;
}

interface UseSliderReturn {
  currentIndex: number;
  itemsPerPage: number;
  maxIndex: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  translateX: number;
}

export function useSlider({
  totalItems,
  breakpoints = [{ width: 1024, itemsPerPage: 2 }],
  defaultItemsPerPage = 1,
}: UseSliderOptions): UseSliderReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Sort breakpoints by width descending to find the first matching one
      const sortedBreakpoints = [...breakpoints].sort((a, b) => b.width - a.width);
      const matchingBreakpoint = sortedBreakpoints.find((bp) => width >= bp.width);
      
      setItemsPerPage(matchingBreakpoint?.itemsPerPage ?? defaultItemsPerPage);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints, defaultItemsPerPage]);

  const maxIndex = useMemo(
    () => Math.max(0, totalItems - itemsPerPage),
    [totalItems, itemsPerPage]
  );

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
    },
    [maxIndex]
  );

  // Ensure currentIndex is valid when itemsPerPage changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const translateX = useMemo(
    () => currentIndex * (100 / itemsPerPage),
    [currentIndex, itemsPerPage]
  );

  return {
    currentIndex,
    itemsPerPage,
    maxIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    translateX,
  };
}

