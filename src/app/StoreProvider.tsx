"use client";

import { makeStore, persistor as createPersistor, AppStore } from "@/lib/store";
import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  const storeRef = useRef<AppStore>();
  const persistorRef = useRef<ReturnType<typeof createPersistor>>();
  
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!storeRef.current) {
    // Initialize store and persistor
    storeRef.current = makeStore();
    persistorRef.current = createPersistor(storeRef.current);
  }

  if (!storeRef.current || !persistorRef.current) return null;

  return (
    <Provider store={storeRef.current}>
      {isClient ? ( // Render PersistGate only on the client side
        <PersistGate loading={null} persistor={persistorRef.current}>
          {children}
        </PersistGate>
      ) : (
        children // Render children immediately if not on the client
      )}
    </Provider>
  );
};

export default StoreProvider;
