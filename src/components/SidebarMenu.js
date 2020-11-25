import React from 'react'
import {
    Link
  } from "react-router-dom";
export default function SidebarMenu() {
    return (
        <ul className="sidebar-nav-list" style={sidebarMenuStyle}>
            <li>
                <Link to="/" className="flex items-center" style={listItem}>
                    <svg className="mr-2 text-red-200" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 2L8 4V8V9V16.9004C7.36474 16.3448 6.47934 16 5.5 16C3.567 16 2 17.3431 2 19C2 20.6569 3.567 22 5.5 22C7.433 22 9 20.6569 9 19V8.84615L20 7.15385V14.9004C19.3647 14.3448 18.4793 14 17.5 14C15.567 14 14 15.3431 14 17C14 18.6569 15.567 20 17.5 20C19.433 20 21 18.6569 21 17V7V6V2Z"></path></svg>
                    <span className="text-lg font-bold">Music</span>
                </Link>
            </li>
            <li>
                <Link to="/" className="flex items-center" style={listItem}>
                    <svg className="mr-2 text-red-200" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 6C15.9999 3.79086 14.2091 2 11.9999 2C9.7908 2 7.99994 3.79086 7.99994 6H10.5C10.7761 6 11 6.22386 11 6.5C11 6.77614 10.7761 7 10.5 7H7.99994V8H10.5C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9H7.99994V10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H7.99994V12C7.99994 14.2091 9.7908 16 11.9999 16C14.2091 16 15.9999 14.2091 15.9999 12V6ZM11.9999 1C9.23852 1 6.99994 3.23858 6.99994 6V12C6.99994 14.7614 9.23852 17 11.9999 17C14.7614 17 16.9999 14.7614 16.9999 12V6C16.9999 3.23858 14.7614 1 11.9999 1ZM5 12H4C4 16.2504 7.31464 19.7265 11.5 19.9846V22H9V23H11.5H12.5H15V22H12.5V19.9846C16.6854 19.7265 20 16.2504 20 12H19C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z"></path></svg>
                    <span className="text-lg font-bold">Shows</span>
                </Link>
            </li>
            <li>
                <a href={'/'} className="flex items-center" style={listItem}>
                    <svg className="mr-2 text-red-200" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 6H10.1V10H4L4 6ZM3 6C3 5.44772 3.44772 5 4 5H10.1C10.6523 5 11.1 5.44772 11.1 6V10C11.1 10.5523 10.6523 11 10.1 11H4C3.44772 11 3 10.5523 3 10V6ZM13.9 6H20V10H13.9V6ZM12.9 6C12.9 5.44772 13.3477 5 13.9 5H20C20.5523 5 21 5.44772 21 6V10C21 10.5523 20.5523 11 20 11H13.9C13.3477 11 12.9 10.5523 12.9 10V6ZM10.1 14H4L4 18H10.1V14ZM4 13C3.44772 13 3 13.4477 3 14V18C3 18.5523 3.44772 19 4 19H10.1C10.6523 19 11.1 18.5523 11.1 18V14C11.1 13.4477 10.6523 13 10.1 13H4ZM13.9 14H20V18H13.9V14ZM12.9 14C12.9 13.4477 13.3477 13 13.9 13H20C20.5523 13 21 13.4477 21 14V18C21 18.5523 20.5523 19 20 19H13.9C13.3477 19 12.9 18.5523 12.9 18V14Z"></path></svg>
                    <span className="text-lg font-bold">Explore</span>
                </a>
            </li>
            <li>
                <a href={'/'} className="flex items-center" style={listItem}>
                    <svg className="mr-2 text-red-200" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.46288L11.2359 6.558C9.7386 4.78468 8.33252 4.12078 7.20792 4.02788C6.09058 3.93558 5.08089 4.39141 4.3149 5.20758C2.74171 6.88383 2.36714 9.87371 4.38121 11.9694C6.80604 14.4926 8.88419 16.5702 10.3554 18.0163C11.0468 18.6959 11.604 19.2359 12 19.617C12.396 19.2359 12.9532 18.6959 13.6446 18.0163C15.1151 16.5709 17.192 14.4946 19.6153 11.9731C21.6398 9.82166 21.2517 6.82926 19.6872 5.17261C18.9238 4.3642 17.9159 3.91515 16.7973 4.01348C15.6703 4.11254 14.2623 4.78367 12.7641 6.558L12 7.46288ZM12 21C12 21 8.52508 17.7245 3.6602 12.6624C-1.03385 7.77799 5.08675 -1.07997 11.3196 5.16957C11.5464 5.39701 11.7734 5.64447 12 5.91285C12.2266 5.64453 12.4535 5.39701 12.6803 5.16938C18.9131 -1.08685 25.0339 7.68217 20.3398 12.6624C15.4749 17.7245 12 21 12 21Z"></path></svg>
                    <span className="text-lg font-bold">Favourites</span>
                </a>
                <ul>
                    <li>
                        <a href={'/'} style={subMenuItemStyle} className="text-xs">
                            Favourite tracks
                        </a>
                    </li>
                    <li>
                        <a href={'/'} style={subMenuItemStyle} className="text-xs">
                            Playlists
                        </a>
                    </li>
                    <li>
                        <a href={'/'} style={subMenuItemStyle} className="text-xs">
                            Albums
                        </a>
                    </li>
                    <li>
                        <a href={'/'} style={subMenuItemStyle} className="text-xs">
                            Artists
                        </a>
                    </li>
                    <li>
                        <a href={'/'} style={subMenuItemStyle} className="text-xs">
                            Podcasts
                        </a>
                    </li>
                </ul>
            </li>
            
        </ul>
    )
}

const sidebarMenuStyle = {
    margin: '32px 0 12px',
    padding: '0 12px'
}

const listItem = {
    padding: '0 12px',
    marginBottom: 16,
    height: 32
}

const subMenuItemStyle = {
    padding: '0 12px 0 48px',
    display: 'inline-block',
    height: 36
}
