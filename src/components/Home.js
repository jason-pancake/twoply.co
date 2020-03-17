import React from 'react'
import { Link } from 'react-router-dom'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faToiletPaperAlt} from "@fortawesome/pro-solid-svg-icons"
import {faDollarSign, faMapMarkerAlt, faToiletPaperAlt as falToiletPaperAlt} from "@fortawesome/pro-light-svg-icons"
import { ROUTES } from '../constants'

const Home = () => (
  <>
    <header className="bg-blue-500 text-yellow-100 text-center p-4 pb-12">
      <div className="text-lg mb-8">
        <FontAwesomeIcon icon={faToiletPaperAlt} /> <span>twoply.co</span>
      </div>
      <h1 className="text-3xl font-bold mb-4 leading-tight">Don't get caught with your&nbsp;pants&nbsp;down.</h1>
      <h2 className="text-xl text-teal-200 mb-8">Toilet paper on demand when you need it most!</h2>
      <div className="text-center">
        <Link to={ROUTES.location} className="inline-block w-64 font-bold text-blue-900 bg-blue-200 mb-4 rounded-full p-4 px-10 shadow-md" href="">I <u>need</u> toilet paper!</Link>
        <a className="inline-block w-64 font-bold text-blue-900 bg-blue-200 rounded-full p-4 px-10 shadow-md" href="">I <u>have</u> toilet paper!</a>
      </div>
    </header>
    <div className="p-6 bg-gray-200">
      <div className="mb-4">
        <div className="font-bold">For Sale</div>
        <div className="text-gray-700 text-sm">Pick-Up Only</div>
      </div>
      <div className="rounded-lg flex bg-white shadow-md">
        <div className="bg-blue-700 p-3 px-4 leading-snug text-center rounded-l-lg text-white">
          <div className="text-xl font-bold">
            4.2
          </div>
          <div className="text-blue-200">
            miles
          </div>
        </div>
        <div className="p-4 py-3">
          <div className="font-bold mb-1">quiltedChamp57</div>
          <div className="flex">
            <div className="mr-4">
              <FontAwesomeIcon icon={faDollarSign} className="mr-1" /> 1.50/roll
            </div>
            <div className="mr-4">
              <FontAwesomeIcon icon={falToiletPaperAlt} className="mr-1" /> 2-ply
            </div>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" /> Athens, Georgia
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Home