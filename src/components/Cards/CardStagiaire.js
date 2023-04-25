import React from "react";

export default function CardStagiaire({
  fname,
  lname,
  email,
  address,
  phone,
  compagny,
  sociaty
}) {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nom
            </th>
            <th scope="col" class="px-6 py-3">
              Prénom
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Adresse
            </th>
            <th scope="col" class="px-6 py-3">
              phone
            </th>
            <th scope="col" class="px-6 py-3">
              compagny
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {lname}
            </th>
            <td class="px-6 py-4">{fname}</td>
            <td class="px-6 py-4">{email}</td>
            <td class="px-6 py-4">{address}</td>
            <td class="px-6 py-4">{phone}</td>
            <td class="px-6 py-4">{sociaty}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
