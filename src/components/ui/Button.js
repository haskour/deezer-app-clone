import React from 'react'

export default function Button({ text, href }) {
    return (
        <a href={href} className="flex text-white font-bold uppercase text-xs w-full justify-center items-center border border-gray-1 cursor-pointer hover:bg-gray-1 hover:text-dark" style={buttonStyle}>
            {text}
        </a>
    )
}

const buttonStyle = {
    height: 32,
    borderRadius: 3
}