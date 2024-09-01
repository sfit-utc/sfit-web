import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import Underline from "../Underline";

const Header: React.FC = () => {
  return (
    <header className="mb-30 flex items-center justify-between bg-stone-400 px-20 py-4 text-2xl">
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <nav>
        <ul className="flex space-x-10">
          <li className="group relative">
            <Link
              to="/"
              className="p-10 font-medium text-black hover:text-opacity-70"
            >
              Trang chủ
            </Link>
            <Underline />
          </li>
          <li className="group relative">
            <Link
              to="/board"
              className="p-10 font-medium text-black hover:text-opacity-70"
            >
              Các ban trực thuộc
            </Link>
            <Underline />
          </li>
          <li className="group relative">
            <Link
              to="/activity"
              className="p-10 font-medium text-black hover:text-opacity-70"
            >
              Hoạt động
            </Link>
            <Underline />
          </li>
          <li className="group relative">
            <Link
              to="/training"
              className="p-10 font-medium text-black hover:text-opacity-70"
            >
              Đào tạo
            </Link>
            <Underline />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
