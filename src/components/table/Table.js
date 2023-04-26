import React from "react";
import { Link } from "react-router-dom";

export default function Table({
  fname,
  lname,
  email,
  address,
  phone,
  company,
  id,
}) {
  return (
    <div className="">
      <table className=" mx-auto max-w-7xl table-fixed w-full text-xs text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{id}</td>
            <td className="px-6 py-4">{fname}</td>
            <td className="px-6 py-4">{lname}</td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">{address}</td>
            <td className="px-6 py-4">{phone}</td>
            <td className="px-6 py-4">{company}</td>
            <td className="px-6 py-4 text-3xl">
              <Link to={`/users/${id}`}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                </svg>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
