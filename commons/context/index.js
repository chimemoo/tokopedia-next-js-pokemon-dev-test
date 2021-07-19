import { PokemonProvider } from './pokemon.context';
import { ToastProvider } from './toast.context';

export default function ContextProvider({ children }) {
  return (
    <PokemonProvider>
      <ToastProvider>{children}</ToastProvider>
    </PokemonProvider>
  );
}
