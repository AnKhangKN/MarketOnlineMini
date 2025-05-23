import { useCallback } from "react";

const useSlug = () => {
  const toSlug = useCallback((str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
  }, []);

  return { toSlug };
};

export default useSlug;
