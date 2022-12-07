"use client"

import React, { useRef } from 'react';
function copyEmailToClipboard() {
  // Create a temporary input element
  const input = document.createElement('input');

  // Set the value of the input to the email address
  input.setAttribute('value', 'joshgusgutierrez@gmail.com');

  // Append the input to the page
  document.body.appendChild(input);

  // Select the input text
  input.select();

  // Copy the selected text
  document.execCommand('copy');

  // Remove the input from the page
  document.body.removeChild(input);
}


function Contact() {
  return (
    <div
    onClick={() => {copyEmailToClipboard()}
    }
    className="h-screen w-[100%] grid grid-cols-1 gap-4 content-center bg-gray-200 text-gray-700">
      <button
      className="rounded-full nm-flat-gray-200 hover:nm-inset-gray-200 leading-5 px-4 py-4 uppercase font-bold  transition duration-200 ease-in-out transform">
        email
      </button>
      <button className="rounded-full nm-flat-gray-200 hover:nm-inset-gray-200 leading-5 px-4 py-4 uppercase font-bold  transition duration-200 ease-in-out transform ">
        github
      </button>
      <button className="rounded-full nm-flat-gray-200 hover:nm-inset-gray-200 leading-5 px-4 py-4 uppercase font-bold  transition duration-200 ease-in-out transform">
        linkedin
      </button>
    </div>
  );
}

export default Contact;
