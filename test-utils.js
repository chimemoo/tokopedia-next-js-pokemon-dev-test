// test-utils.js
import { render } from '@testing-library/react';
import ContextProvider from './commons/context';

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
