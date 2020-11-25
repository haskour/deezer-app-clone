import React from 'react'
import Button from "./ui/Button";
export default function ConversionBanner() {
    return (
        <div style={bannerStyles}>
            <p style={bannerTextStyles} className="text-white font-light">
                You're on Free. Upgrade &amp; skip ads free for 30 days
            </p>
            <Button text={'subscribe'}></Button>
        </div>
    )
}

const bannerStyles = {
    margin: '36px 16px 12px',
    padding: '20px 16px',
    backgroundColor: '#2692b7',
    backgroundImage: 'linear-gradient(56deg,#0087c1 13%,#89d7bb)',
    borderRadius: 10
}

const bannerTextStyles = {
    fontSize: 13,
    marginBottom: 13
}

