import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-500 text-white py-4 flex justify-center items-center'>
      <p>&copy; {new Date().getFullYear()} Shop Markt. All rights reserved.</p>
    </footer>
  )
}
