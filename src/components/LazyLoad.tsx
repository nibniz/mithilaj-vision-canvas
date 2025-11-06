import { ReactNode } from "react";
import { lazy, Suspense } from "react";

export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  const LazyComponent = lazy(importFn);
  
  return (props: React.ComponentPropsWithoutRef<T>) => (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export const LazyLoad = ({ children, fallback }: LazyLoadProps) => {
  return <Suspense fallback={fallback || <div className="min-h-screen bg-black" />}>{children}</Suspense>;
};

