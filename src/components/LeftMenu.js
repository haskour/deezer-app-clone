import React from 'react'
import ConversionBanner from "./ConversionBanner";
import SidebarMenu from "./SidebarMenu";
export default function LeftMenu() {
    return (
        <div className="page-sidebar fixed top-0 left-0 border-r border-gray-2" style={LeftMenuStyles}>
            <div className="sidebar-header flex items-center justify-center" style={sidebarHeaderStyles}>
                <a href={'/'} className="inline-block mx-auto bg-cover" style={logoStyles}>
                </a>
            </div>
            <ConversionBanner></ConversionBanner>
            <SidebarMenu></SidebarMenu>
        </div>
    )
}

const LeftMenuStyles = {
    width: 220,
    bottom: 80
}
const logoStyles = {
    width: 125,
    height: 32,
    backgroundImage: 'url(https://cdns-files.dzcdn.net/cache/slash/images/common/logos/deezer_black@2x.e1add0a630b56bf0e185711dacfc359e.png)'
}
const sidebarHeaderStyles = {
    height: 56,
    margin: '0 24px'
}