import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-yellow-200 text-black p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? 
          <AiOutlineClose></AiOutlineClose>
        : 
          <AiOutlineMenu></AiOutlineMenu>
        }
      </div>
      <ul className={`md:flex duration-1000
      ${open ? 'top-16' : '-top-60'}
      absolute md:static  bg-yellow-200 p-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
