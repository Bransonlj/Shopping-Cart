import React from 'react'

/**
 * A styled button component with an optional image and label.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text to display on the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.image] - The optional image URL to display on the button, alongside the label.
 */
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
