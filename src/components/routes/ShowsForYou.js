import React from 'react'
import ChanelSection from "../ChanelSection";
// import AddFavoritArtist from "../AddFavoritArtist";
export default function ShowsForYou() {
    return (
        <div>
            <ChanelSection title="Podcasts for you"></ChanelSection>
            {/* <AddFavoritArtist></AddFavoritArtist> */}
            <ChanelSection title="Today's best podcasts"></ChanelSection>
        </div>
    )
}