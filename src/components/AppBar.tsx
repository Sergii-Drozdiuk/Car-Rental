import { Navigation } from './Navigation';

export const AppBar = () => {
  return (
    <header className="flex justify-between items-center gap-3 mb-2 rounded-b-lg bg-brand px-6 py-3 shadow shadow-blue-500">
      <Navigation />
    </header>
  );
};
