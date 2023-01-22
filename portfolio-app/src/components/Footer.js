import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  return (
    <div className="footer">
            Copyright &copy;{currentYear}
        </div>
  )
}

export default Footer