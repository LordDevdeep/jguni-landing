import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export function useNavigationLoading() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useCallback(
    async (href: string) => {
      setIsLoading(true);
      // Prefetch the route
      router.prefetch(href);
      // Use setTimeout to ensure the UI updates are batched
      setTimeout(() => {
        router.push(href);
      }, 0);
    },
    [router]
  );

  return { navigate, isLoading };
}
