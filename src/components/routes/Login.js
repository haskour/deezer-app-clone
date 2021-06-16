import React from "react";
import logo from "../../assets/deezer-logo.png";
import Button from "../ui/Button";
export default function LoginRoute() {
  return (
    <div className="bg-gray-3">
      <header className="bg-white py-6 px-32 border-b border-gray-2">
        <div className="flex items-center">
          <img src={logo} style={{ maxWidth: 135 }} />

          <ul className="flex items-center ml-auto">
            <li className="mr-6">
              <a className="text-xl font-bold ">Download</a>
            </li>
            <li className="mr-6">
              <a className="text-xl font-bold">Plans</a>
            </li>
          </ul>

          <div className="flex items-center">
            <a
              href="#0"
              className="px-6 py-2 border-2 border-blue rounded-full text-blue text-sm font-semibold">
              Log in
            </a>
            <a
              href="#0"
              className="px-6 py-2 border-2 border-blue bg-blue rounded-full text-white text-sm font-semibold ml-4">
              Sign up
            </a>
          </div>
        </div>
      </header>

      <div style={loginPageStyle}>
        <div className="max-w-screen-lg mx-auto">
            <div className="w-1/2">
                <div style={{maxWidth: 380, marginLeft: 'auto', marginRight: 'auto'}}>
                    <h1 className="font-bold text-3xl text-center py-6">Log in</h1>
                    <ul className="flex justify-between">
                        <li>
                            <a className="inline-flex items-center bg-facebook rounded-full text-white py-2 px-4">
                                <svg style={{ height: 24, width: 24, minWidth: 24}} class="unlogged-btn-social-icon" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12a8 8 0 10-9.25 7.9v-5.59H8.72V12h2.03v-1.76c0-2 1.2-3.12 3.02-3.12.88 0 1.8.16 1.8.16v1.97h-1.02c-.99 0-1.3.62-1.3 1.25V12h2.22l-.36 2.31h-1.86v5.6A8 8 0 0020 12z" fill="#fff"></path></svg>
                                <span className="text-xs font-semibold inline-block ml-3 mr-1">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a className="inline-flex items-center bg-white rounded-full py-2 px-4">
                                <svg style={{ height: 24, width: 24, minWidth: 24}} class="unlogged-btn-social-icon" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55 13.67l-.56 2.08-2.04.04a7.96 7.96 0 01-.06-7.47l1.82.33.8 1.8a4.76 4.76 0 00.04 3.22z" fill="#FBBB00"></path><path d="M19.86 10.5a8 8 0 01-2.85 7.74l-2.28-.12-.33-2.01a4.77 4.77 0 002.05-2.44h-4.27v-3.16h7.68z" fill="#518EF8"></path><path d="M17 18.24a8 8 0 01-12.05-2.45l2.6-2.12a4.76 4.76 0 006.85 2.44l2.6 2.13z" fill="#28B446"></path><path d="M17.1 5.84l-2.59 2.12a4.76 4.76 0 00-7.01 2.5L4.9 8.31a8 8 0 0112.2-2.48z" fill="#F14336"></path></svg>
                                <span className="text-xs font-semibold inline-block ml-3 mr-1">Google</span>
                            </a>
                        </li>
                        <li>
                            <a className="inline-flex items-center bg-apple rounded-full text-white py-2 px-4">
                                <svg style={{ height: 24, width: 24, minWidth: 24}} class="unlogged-btn-social-icon" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.35 14.75l-.14.38c-.4 1.08-1 2.03-1.73 2.9-.14.18-.3.33-.47.48-.34.28-.73.45-1.17.47-.34 0-.66-.05-.97-.18-.23-.1-.45-.2-.68-.28a3.02 3.02 0 00-2.2.06c-.27.1-.53.22-.8.3-.3.11-.63.15-.96.1a1.87 1.87 0 01-.76-.37 4.34 4.34 0 01-.76-.75 10.23 10.23 0 01-2.14-4.44 8.08 8.08 0 01-.18-2.16c.05-.87.26-1.7.72-2.45A3.9 3.9 0 018.61 7c.65-.16 1.29-.1 1.91.15l.99.37c.3.11.6.11.9 0l1.02-.38c.34-.13.7-.23 1.06-.26a4 4 0 011.6.2c.74.25 1.34.68 1.8 1.32l.03.05c-1.14.8-1.8 1.85-1.7 3.28.1 1.43.87 2.4 2.13 3.02zM11.93 6.7c.33.01.66-.05.97-.18a3.55 3.55 0 002.15-3.23L15.04 3c-.15.02-.28.03-.41.06a3.57 3.57 0 00-2.8 3.56c0 .06.03.08.1.08z" fill="#fff"></path></svg>
                                <span className="text-xs font-semibold inline-block ml-3 mr-1">Apple</span>
                            </a>
                        </li>
                    </ul>

                    <form className="mt-6">
                      <div className="mb-2 relative flex items-center">
                        <span className="text-gray-3 absolute ml-4">E-mail Address</span>
                        <input className="py-5 focus:outline-none px-4 w-full focus:shadow-lg leading-tight" type="text" />
                      </div>
                      <div className="py-2 relative flex items-center">
                        <span className="text-gray-3 absolute ml-4">Password</span>
                        <input className="py-5 focus:outline-none px-4 w-full focus:shadow-lg leading-tight" type="text" />
                      </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

const loginPageStyle = { 
    minHeight: 862,
    backgroundColor: "#f0f0f0",
    backgroundImage: 'url(https://e-cdns-files.dzcdn.net/cache/slash/images/unlogged/login/login.50c4b565ee40a778fe0c2ee98b5540a3.jpg)',
    backgroundPosition: '100% 0',
    backgroundRepeat: 'no-repeat'
};
