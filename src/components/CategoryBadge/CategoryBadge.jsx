import React from 'react'

export default function CategoryBadge({ label }) {
  return (
    <div className='bg-slate-500 w-fit px-3 py-1 rounded-full text-sm text-gray-100'>{ label }</div>
  )
}
