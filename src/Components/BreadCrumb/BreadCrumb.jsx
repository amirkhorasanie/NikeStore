import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ links }) {
  return (
    <>
      <div className="flex">
        <div className="flex mb-1.5 items-center">
          <ul className="flex items-center gap-2.5">
            {links.map((link, index) => (
              <li key={link.id} className="flex text-gray-500/80 font-semibold items-center gap-2">
                <Link to={link.to}>
                  {link.title}
                </Link>

                {index < links.length - 1 && (
                  <span className="text-gray-500">{'>'}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
