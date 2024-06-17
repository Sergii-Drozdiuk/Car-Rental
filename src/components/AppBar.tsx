import { Navigation } from './Navigation';

export const AppBar = () => {
  return (
    <header className="flex justify-between items-center gap-3 mb-2 rounded-b-lg bg-[#1976d2] px-6 py-3 text-black shadow shadow-blue-500">
      <Navigation />
    </header>
  );
};
