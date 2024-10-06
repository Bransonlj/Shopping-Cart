import React from 'react'

/**
 * Renders a badge for displaying a category label.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The category label to display inside the badge.
 */
export default function CategoryBadge({ label }) {
  return (
    <div className='bg-slate-500 w-fit px-3 py-1 rounded-full text-sm text-gray-100'>{ label }</div>
  )
}
