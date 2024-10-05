import React from 'react'

export default function ProductImage({src}) {
  return (
    <div>
      <img width={100} src={src} alt="image not found" />
    </div>
  )
}
