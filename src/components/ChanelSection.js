import React from 'react'

export default function ChanelSection(props) {
    return (
        <section className="w-full">
            <div className="max-w-screen-lg p-6 mx-auto flex justify-between">
                <h2 className="text-xl font-bold">{props.title}</h2>
                <div className="flex flex-wrap">
                    <button className="p-1">
                        <svg className="opacity-25" focusable="false" height="16" width="16" viewBox="0 0 12 12" aria-hidden="true"><path d="M4.7 6l4.5-4.4a.9.9 0 0 0 0-1.3.8.8 0 0 0-1.3 0L2.7 5.4a.9.9 0 0 0 0 1.2l5.2 5.1a.9.9 0 0 0 1.3 0 .9.9 0 0 0 0-1.3z"></path></svg>
                    </button>
                    <button className="p-1">
                        <svg className="svg-icon svg-icon-chevron-right" focusable="false" height="16" width="16" viewBox="0 0 12 12" aria-hidden="true"><path d="M7.3 6l-4.5 4.4a.9.9 0 0 0 0 1.3.8.8 0 0 0 1.3 0l5.2-5.1a.9.9 0 0 0 0-1.2L4.1.3a.9.9 0 0 0-1.3 0 .9.9 0 0 0 0 1.3z"></path></svg>
                    </button>
                </div>
            </div>
            <div className="max-w-screen-lg px-6 mx-auto pb-6">
                <div className="flex justify-between -mr-8">
                    <article className="w-1/4 pr-8">
                        <div className="relative shadow-md">
                            <img className="rounded-md" src="https://e-cdns-images.dzcdn.net/images/cover/b3dd65f6ce5c6c32186bac6777471e6b/528x528-000000-80-0-0.jpg" alt="" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                                <button className="bg-white p-4 rounded-full">
                                    <svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.5.5v11l9-5.5z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm leading-tight">
                                An infinite mix of favourites and new tracks
                            </p>
                        </div>
                    </article>
                    <article className="w-1/4 pr-8">
                        <div className="relative">
                            <img className="rounded-md" src="https://e-cdns-images.dzcdn.net/images/artist/c2309ca87067cc282a054c5c6dd592cd-3c190a54f784989eeb7588f437aa36f5-0f9525cba3c8b4b5581d4c0586d4c771-76c17eefc3b4db330c416fab80e46132/528x528-000000-80-0-0.jpg" alt="" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                                <button className="bg-white p-4 rounded-full">
                                    <svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.5.5v11l9-5.5z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <a href="/" className="text-sm leading-tight">
                                Featuring Tiiwtiiw, Saad Lamjarred, Hatim Ammor, Mehdi Mozayine
                            </a>
                        </div>
                    </article>
                    <article className="w-1/4 pr-8 relative">
                        <div className="relative">
                            <img className="rounded-md" src="https://e-cdns-images.dzcdn.net/images/artist/b54bdf9fb6c34dd65509280f6601bb2b-0a583310e16929d26a6123a57f46786d-718942059d7b35b22a40da0d23554e8d-262e5d841121b9f998052360b9af6981/528x528-000000-80-0-0.jpg" alt="" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                                <button className="bg-white p-4 rounded-full">
                                    <svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.5.5v11l9-5.5z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <a href="/" className="text-sm leading-tight">
                                Featuring Justin Bieber, Khalid, Post Malone, DaBaby
                            </a>
                        </div>
                    </article>
                    <article className="w-1/4 pr-8 relative">
                        <div className="relative">
                            <img className="rounded-md" src="https://e-cdns-images.dzcdn.net/images/artist/0f9525cba3c8b4b5581d4c0586d4c771-76c17eefc3b4db330c416fab80e46132-04cd7d2be87e209fa87e73010486b017-41640b69c6614e9b05cdd83dcf6131cc/528x528-000000-80-0-0.jpg" alt="" />
                            <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
                                <button className="bg-white p-4 rounded-full">
                                    <svg focusable="false" height="1em" width="1em" viewBox="0 0 12 12" aria-hidden="true"><path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2.5.5v11l9-5.5z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <a href="/" className="text-sm leading-0">
                                Featuring Hatim Ammor, Mehdi Mozayine, Aminux, Adil Assil
                            </a>
                        </div>
                    </article>
                </div>
            </div>

        </section>
    )
}