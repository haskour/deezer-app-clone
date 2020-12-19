import React from 'react'

export default function MediaPlayer() {
    return (
        <section style={MediaPlayerStyle} className="border-t border-gray-2 fixed bottom-0 left-0 right-0 flex items-center">
            <div className="player-controls">
                <ul className="flex items-center">
                    <li>
                        <button className="p-3 rounded-full">
                            <svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 5.397V.5a.5.5 0 1 0-1 0v11a.5.5 0 1 0 1 0V6.597L11 12V0L2 5.397z"></path></svg>
                        </button>
                    </li>
                    <li>
                        <button className="p-3 rounded-full">
                            <svg className="h-6 w-6" focusable="false" viewBox="0 0 12 12" aria-hidden="true"><path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.5.5v11l9-5.5z"></path></svg>
                        </button>
                    </li>
                    <li>
                        <button className="p-3 rounded-full">
                            <svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M11 .5v11c0 .276-.232.5-.5.5a.503.503 0 0 1-.5-.5V7.08L1.562 11.95A.375.375 0 0 1 1 11.624V.376c0-.29.312-.47.562-.325L10 4.919V.5c0-.276.232-.5.5-.5.276 0 .5.229.5.5z"></path></svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="player-track flex-1" style={PlayerTrackStyle}>
                <div className="track-heading m-auto w-4/5">
                    <div style={TrackHeading} className="flex items-center justify-between">
                        <div>
                            <a href="{'/'}" className="text-sm">Nota </a>

                            <a href="{'/'}" className="text-sm"> Dizzy DROS</a>
                        </div>
                        <div className="flex items-center">
                            <button className="p-3 rounded-full">
                                <svg stroke="#000" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 1.5v9M1.5 6h9" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            </button>
                            <button className="p-3 rounded-full">
                                <svg stroke="#000" focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path className="svg-path" fill="none" strokeWidth="1.2" d="M6 10.77a26.815 26.815 0 0 0 2.595-2.087c.996-.913 1.78-1.8 2.267-2.612.356-.594.538-1.124.538-1.571 0-1.734-1.207-2.9-2.65-2.9-.616 0-1.17.229-1.656.619a3.006 3.006 0 0 0-.595.614L6 3.582l-.5-.75a3.006 3.006 0 0 0-.593-.613C4.42 1.829 3.867 1.6 3.25 1.6 1.807 1.6.6 2.766.6 4.5c0 .447.182.977.538 1.571.488.812 1.271 1.699 2.267 2.612A26.815 26.815 0 0 0 6 10.77z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div style={SeekBarStyle} className="seek-bar relative flex items-center">
                        <span className="text-gray-3 text-xs absolute left-0 -ml-12">02:30</span>
                        <div style={SliderTrackDefaultStyle} className="slider-track-default w-full relative">
                        </div>
                        <span className="text-gray-3 text-xs absolute right-0 -mr-12">05:56</span>
                    </div>
                </div>
            </div>
            <div className="player-options flex">
                <ul className="flex items-center">
                    <li>
                        <button className="p-2" type="button" aria-label="Chromecast"><svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M0 9.5V11h1.5c0-.83-.67-1.5-1.5-1.5zM0 7.5v1A2.5 2.5 0 0 1 2.5 11h1c0-1.935-1.565-3.5-3.5-3.5z"></path><path d="M0 5.5v1A4.5 4.5 0 0 1 4.5 11h1A5.5 5.5 0 0 0 0 5.5z"></path><path d="M2 3v1.815A6.517 6.517 0 0 1 6.185 9H10V3H2z"></path><path d="M1 1c-.55 0-1 .45-1 1v2h1V2h10v8H7v1h4c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1H1z"></path></svg></button>
                    </li>
                    <li className="ml-1">
                        <button className="p-2" type="button" aria-label="Repeat the current track"><svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M8.667 9.214H8V10.5L5.333 8.571V8.25c0-.178.149-.321.334-.321h3c1.104 0 2-.864 2-1.929 0-1.066-.896-1.929-2-1.929h-.334A.327.327 0 0 1 8 3.75v-.643c0-.178.148-.321.333-.321h.334C10.507 2.786 12 4.225 12 6s-1.493 3.214-3.333 3.214zM6.333 4.071h-3c-1.105 0-2 .863-2 1.929 0 1.065.895 1.929 2 1.929h.334c.183 0 .333.143.333.321v.643c0 .177-.15.321-.333.321h-.334C1.493 9.214 0 7.775 0 6s1.493-3.214 3.333-3.214H4V1.5l2.667 1.929v.321c0 .177-.15.321-.334.321z"></path></svg></button>
                    </li>
                    <li className="ml-1">
                        <button className="p-2" type="button" aria-label="Turn on Shuffle"><svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M9.333 9.214h-.666C6.826 9.214 5.333 7.775 5.333 6c0-1.066-.894-1.929-2-1.929H.683C.298 4.071 0 3.784 0 3.43c0-.356.298-.643.667-.729.137 0 2.65.01 2.666 0 1.841.086 3.334 1.525 3.334 3.3 0 1.065.896 1.929 2 1.929h3c.185 0 .333.143.333.321v.321L9.333 10.5V9.214zm-.666-5.143c-.367 0-.708.103-1.004.27a4.497 4.497 0 0 0-.672-1.104c.493-.28 1.062-.451 1.709-.537.013.03.51 0 .6 0V1.5L12 3.429v.321a.327.327 0 0 1-.333.321h-3zM3.333 7.93c.369 0 .709-.103 1.004-.27.168.404.4.767.672 1.104-.493.28-1.062.451-1.676.537-.018-.011-2.435 0-2.666 0C.298 9.214 0 8.927 0 8.571c0-.355.298-.642.667-.642h2.666z"></path></svg></button>
                    </li>
                    <li className="ml-1">
                        <button className="p-2" type="button"><svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><g fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"><path d="M3 4.5H.5v3H3l2.5 2v-7z"></path><path fill="none" d="M9 2.5c2 1.933 2 5.067 0 7m-1.5-5c.976.829.976 2.171 0 3"></path></g></svg></button>
                    </li>
                    <li className="ml-1">
                        <button className="p-2" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Audio"><svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path d="M2.585 9H.5a.5.5 0 1 0 0 1h2.085a1.5 1.5 0 0 0 2.83 0H11.5a.5.5 0 1 0 0-1H5.415a1.5 1.5 0 0 0-2.83 0zm5.5-3H.5a.5.5 0 1 0 0 1h7.585a1.5 1.5 0 0 0 2.83 0h.585a.5.5 0 1 0 0-1h-.585a1.5 1.5 0 0 0-2.83 0zm-6.5-3H.5a.5.5 0 1 0 0 1h1.085a1.5 1.5 0 0 0 2.83 0H11.5a.5.5 0 1 0 0-1H4.415a1.5 1.5 0 0 0-2.83 0z"></path></svg></button>
                    </li>
                </ul>
                <div className="option-item relative border-l border-gray-2" style={optionItemStyle}>
                    <button className="queuelist flex items-center" style={queuelistStyle} type="button">
                        <figure>
                            <img className="rounded-md" src="https://e-cdns-images.dzcdn.net/images/cover/41e4274b40019c00fccadd405e3badf6/56x56-000000-80-0-0.jpg" alt="" height="28" width="28" />
                        </figure>
                        <span className="block ml-2 text-xs">Queue</span>
                    </button>
                </div>

            </div>
        </section>

    )
}

const MediaPlayerStyle = {
    height: 80,
    paddingLeft: 24,
    paddingRight: 24
}
const PlayerTrackStyle = {
    paddingLeft: 72,
    paddingRight: 72,
}
const TrackHeading = {
    minHeight: 32,
    maxWidth: 800,
    marginBottom: 4
}
const SliderTrackDefaultStyle = {
    height: 2,
    background: '#72727d'
}
const SeekBarStyle = {
    height: 12,
}
const optionItemStyle = {
    marginLeft: 12,
    paddingLeft: 20,
}

const queuelistStyle = {
    padding: '8px 12px 8px 8px'
}