import { ReactElement, createContext, useContext, useState } from "react";

export type PageNavigationContextType = {
  lastPage: string | null;
  pages: string[];
  go: (path: string) => void;
  goBack: () => void;
  reset: () => void;
};

export const PageNavigationContext = createContext<PageNavigationContextType>({
  lastPage: null,
  pages: [],
  go: () => {},
  goBack: () => {},
  reset: () => {},
});

export const PageNavigationProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [pages, setPages] = useState<string[]>([]);
  const [lastPage, setLastPage] = useState<string | null>(null);

  const go = (url: string) => {
    setLastPage(url);
    setPages([...pages, url]);
  };

  const goBack = () => {
    const _pages = [...pages];
    _pages.pop();
    setPages(_pages);
    setLastPage(_pages[pages.length - 1] ? _pages[pages.length - 1] : null);
  };

  const reset = () => {
    setPages([]);
    setLastPage(null);
  };

  const contextValue = {
    lastPage,
    pages,
    go,
    goBack,
    reset,
  };

  return (
    <PageNavigationContext.Provider value={contextValue}>
      {children}
    </PageNavigationContext.Provider>
  );
};

export const usePageNavigationContext = () => {
  return useContext(PageNavigationContext);
};
