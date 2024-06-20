import { useState, useMemo } from 'react';

import { createContextHook } from 'use-context-hook';

const context = {};

export const FiltersContext = createContextHook(context);

export function FiltersContextProvider(props) {
  const [filterToggle, setFilterToggle] = useState(false);

  const toggleFilter = () => {
    setFilterToggle(!filterToggle);
  };

  const contextValues = useMemo(
    () => ({
      filterState: filterToggle,
      toggleFilter,
      setFilterToggle,
    }),
    [filterToggle, toggleFilter],
  );

  return <FiltersContext.Provider value={contextValues}>{props.children}</FiltersContext.Provider>;
}
