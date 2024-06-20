import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-24 py-5 text-white bg-orange-500 flex justify-between">
      <div>
        <img
          className=" mx-4 w-50 h-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6V3UZw3EFtKg1WdRndxp0ukjAzG38NDe6Uw&usqp=CAU"
        ></img>
      </div>
      <div>
        <ul className="flex justify-between">
          <li className="mx-3 px-3 py-3 text-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-3 px-3 py-3 text-xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-3 px-3 py-3 text-xl">Help</li>
          <li className="mx-3 px-3 py-3 text-xl">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
