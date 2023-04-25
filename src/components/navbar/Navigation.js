import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigationItem } from '../../data/Navigation';

export default function Navigation() {
  
  // const handleChangeColor = () => {
  //   setColor("bg-puple-200")
  // };
  let route = useLocation().pathname;
  let activeStyle = "text-red-500 border-b-2 border-purple-900"

  return (
    <header className=" bg-blue-500 py-10 px-20 text-white">
      
      <ul className="flex justify-between">
        <Link to="*">
          <li>
            <span className="text-3xl font-bold">GOAT.</span>
          </li>
        </Link>
        <div className="flex justify-end space-x-3 items-center">
          {navigationItem.map((item) => (
            <Link to={item.URL} key={item.text}>
              <li className={route === item.URL ? activeStyle :""}>{item.text}</li>
            </Link>
          ))}
          {/* <button onClick={handleChangeColor} className="bg-gray-500 p-2 rounded-lg text-black">
            *
          </button> */}
        </div>
      </ul>
    </header>
  );
}
