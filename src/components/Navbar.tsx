import { NavLink } from 'react-router-dom'
import { NavbarType } from '../App'
import { Badge } from '@mui/material'

const Navbar: React.FC<{ item: NavbarType,productCount:number }> = ({ item , productCount}) => {
  return (
    <div>
      <Badge showZero badgeContent={productCount} color="primary">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `text-20px font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
              isActive ? 'active-nav' : 'text-white hover:text-blue-900'
            }`
          }
        >
          {item.title}
        </NavLink>
      </Badge>
    </div>
  )
}

export default Navbar
