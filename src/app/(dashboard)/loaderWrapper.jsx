"use client";
import React from "react";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";
import { Loading } from "@/components/loader/Loading";

export default function LoaderWrapper({ children }) {
  const { isRendering, isLoading } = useLoader();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={cn("opacity-0", { "opacity-100": !isRendering })}>
      {children}
    </div>
  );
}
