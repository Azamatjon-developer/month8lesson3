import { NavLink } from 'react-router-dom';
import { NavbarType } from '../App';

const Navbar: React.FC<{ item: NavbarType }> = ({ item }) => {
  return (
    <div>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `text-20px font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
            isActive ? 'active-nav' : 'text-white hover:text-indigo-300'
          }`
        }
      >
        {item.title}
      </NavLink>
    </div>
  );
};

export default Navbar;
