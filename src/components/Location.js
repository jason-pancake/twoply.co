import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faToiletPaperAlt} from "@fortawesome/pro-solid-svg-icons"
import {faHome} from "@fortawesome/pro-solid-svg-icons"
import {Link} from "react-router-dom"
import {ROUTES} from "../constants"
import LocationSearchInput from './LocationSearchInput'

const Location = () => (
  <>
    <header className="p-4 text-blue-600 bg-blue-100">
      <Link to={ROUTES.home}>
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </header>
    <img src="https://placehold.it/64x64.jpg" className="rounded-full w-12 h-12 block mx-auto border-2 border-white shadow-md" alt="Avatar" style={{ transform: 'translateY(-50%)'}} />
    <main className="px-6">
      <form>
        <label className="text-center block text-2xl mb-4 text-blue-900 font-bold">Where are you located?</label>
        <LocationSearchInput />
        <button type="submit" className="mt-4 bg-green-500 p-4 px-10 rounded-lg w-full uppercase text-green-100 font-bold">Next</button>
      </form>
    </main>
  </>
);

export default Location;