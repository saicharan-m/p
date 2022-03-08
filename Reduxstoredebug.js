const stores = new Set();
const traverse = (element) => {
  let store =
      internalRoot?.memoizedState?.element?.props?.store
      || internalRoot?.pendingProps?.store
      || internalRoot?.stateNode?.store;

  if (store) {
    stores.add(store);
  }

  if (element.child) {
    traverse(element.child);
  }
};

// Find the root element for React
const reactRoot = Array.from(document.querySelectorAll("*[id]")).find((el) => el?._reactRootContainer?._internalRoot?.current);

const internalRoot = reactRoot._reactRootContainer._internalRoot.current;

// Traverse the root react element to find all Redux States in the app
traverse(internalRoot);
