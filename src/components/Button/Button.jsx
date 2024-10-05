import React from 'react'

export default function Button({label, onClick, image}) {
  return (
    <button
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center"
      onClick={onClick}
    >
      {
        image && <img src={image} className="h-5 w-5 mr-2"></img>
      }
      {label}</button>
  )
}
