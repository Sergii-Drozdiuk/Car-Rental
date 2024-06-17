import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  return (
    <nav className="flex gap-3 text-white">
      <Link to="/">
        <img src="./phonebook.svg" width={24} height={24} alt="logo" />
      </Link>
      <Link to="/" className="hover:scale-105 hover:underline focus:scale-105 focus:underline">
        Home
      </Link>
      <Link to="/catalog" className="hover:scale-105 hover:underline focus:scale-105 focus:underline">
        Catalog
      </Link>
      <Link to="/favorites" className="hover:scale-105 hover:underline focus:scale-105 focus:underline">
        favorites
      </Link>
    </nav>
  );
};
