import { Link } from 'react-router-dom';
import navigationData from './Nav.json'; 


 const Navigation = () => {
  return (
    <nav className="bg-blue">
      <ul className="flex space-x-4 mx-3">

        {navigationData.map((item, index) => (
          <li className="my-2 flex items-center" key={index}>
            <Link
              to={item.path}
              className="text-white hover:text-gray-900"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigation;






