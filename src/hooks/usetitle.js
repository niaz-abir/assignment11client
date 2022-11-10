import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}- Artsy Lens`;
  }, [title]);
};

export default useTitle;
