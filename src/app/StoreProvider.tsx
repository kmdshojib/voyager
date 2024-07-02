"use client";

import { AppStore, makeStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";

interface StoreProvider {
  children: React.ReactNode;
}
const StoreProvider = ({ children }: StoreProvider) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // helps to create store instance
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};
export default StoreProvider;