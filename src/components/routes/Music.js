import React from 'react'
import ChanelSection from "../ChanelSection";
import AddFavoritArtist from "../AddFavoritArtist";
export default function MusicRoute() {
    return (
        <div>
            <ChanelSection data="" title="Made for you"></ChanelSection>
            <AddFavoritArtist></AddFavoritArtist>
            <ChanelSection title="Playlists you'll love"></ChanelSection>
        </div>
    )
}