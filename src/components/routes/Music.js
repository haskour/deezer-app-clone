import React from 'react'
import ChanelSection from "../ChanelSection";
import AddFavoritArtist from "../AddFavoritArtist";
import LeftMenu from "../LeftMenu";
import TopHeader from "../TopHeader";
import MediaPlayer from "../MediaPlayer"
export default function MusicRoute() {
    return (
        <>
            <LeftMenu></LeftMenu>
            <TopHeader></TopHeader>
            <MediaPlayer></MediaPlayer>
            <ChanelSection data="" title="Made for you"></ChanelSection>
            <AddFavoritArtist></AddFavoritArtist>
            <ChanelSection title="Playlists you'll love"></ChanelSection>
        </>
    )
}