import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList): void {
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
    } else {
      return effect();
    }
  }, deps);
}
