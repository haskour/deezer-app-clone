import React from 'react'

export default function TopHeader() {
    return (
        <header className="fixed flex items-center right-0 border-b border-gray-2" style={topHeaderStyle}>
            <form className="flex items-center w-3/5 mr-auto">
                <button className="mr-3">
                    <svg class="svg-icon svg-icon-search topbar-search-icon" focusable="false" height="16" width="16" viewBox="0 0 12 12" aria-hidden="true"><path d="M9.827 8.584l1.95 1.951a.879.879 0 0 1-1.242 1.242l-1.95-1.95c-2.137 1.55-5.12 1.383-7.02-.517-2.108-2.108-2.083-5.55.055-7.69C3.76-.518 7.202-.543 9.31 1.565c1.9 1.9 2.067 4.883.517 7.02zm-1.256-.013c1.721-1.72 1.741-4.49.045-6.187C6.92.688 4.15.708 2.429 2.43.708 4.149.688 6.919 2.384 8.616c1.696 1.696 4.466 1.676 6.187-.045z"></path></svg>
                </button>
                <input className="focus:outline-none" type="text" placeholder="Search"></input>
            </form>
            <button>
                <svg className="svg-icon svg-icon-bell" focusable="false" height="18" width="18" viewBox="0 0 12 12" aria-hidden="true"><path d="M6.003 0C6.513 0 7.029 0 7 1c1.569.196 2.992 1.677 3 3.5.009 1.957.16 3.293.856 3.854.091.073.144.183.144.3v.961a.385.385 0 0 1-.385.385h-9.23A.385.385 0 0 1 1 9.615v-.961c0-.117.053-.227.144-.3.697-.56.847-1.897.856-3.854.009-1.99 1.23-3.342 2.999-3.5-.015-1 .494-1 1.004-1zM5 11.328L8 11l-.175.283c-.29.472-.733.717-1.305.717-.55 0-.982-.144-1.28-.437L5 11.328z"></path></svg>
            </button>
            <button style={headerThumbnailStyle}>
                <img className="rounded-full max-w-full" src="https://e-cdns-images.dzcdn.net/images/user/ac5396f1540741e955257292ad8f5996/64x64-000000-80-0-0.jpg" alt=""></img>
            </button>
        </header>
    )
}

const topHeaderStyle = {
    height: 56,
    padding: '0 24px',
    left: 220,
}

const headerThumbnailStyle = {
    height: 32,
    width: 32,
    marginLeft: 16
}
