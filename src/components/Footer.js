import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-danger text-white text-center py-3">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Credify. Made with ❤ by Urvish.</p>
    </div>
  </footer>
  )
}

export default Footer