import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFileExport } from '@fortawesome/free-solid-svg-icons/faFileExport'
import { faRing } from '@fortawesome/free-solid-svg-icons/faRing'
import { faWaze } from '@fortawesome/free-brands-svg-icons/faWaze'
import { faSquarespace } from '@fortawesome/free-brands-svg-icons'

function Features() {
  return (
    <div className='main-div'>
      <div>
        <div className='ftr'><p>Feauters</p></div>
        <div className='top-parent-anltc'><h2>Analytics thats feels like it's from the future</h2></div>
        <div >
          <p className='top-para'>powerfull, srlf-serve product, and growth analytics to help you convert, engage, </p>
          <p className='top-para'>and retain more users. Trusted by over 4,000 startups.</p>
        </div>
      </div>

      <div className='scnd-div'>

        <div>
          <div className='head-para'>
            <FontAwesomeIcon icon={faComments} />
          </div>
          <div>
            <p className='head-para'>Share team inboxes</p>
          </div>
          <div className='mini-para-div'>
            <p className='mini-para'>Whether you have a team of 2 or 200, our shares </p>
            <p className='mini-para'>team inboxes keep everyone on the same page</p>
            <p className='mini-para'>and in the loop</p>
          </div>
        </div>

        <div>
          <div className='head-para'>
            <FontAwesomeIcon icon={faRing} />
          </div>
          <div>
            <p className='head-para'>Deliver instant answers</p>
          </div>
          <div className='mini-para-div'>
            <p className='mini-para'>An all-in-one customer service platform that helps </p>
            <p className='mini-para'>you balance everything your customers need to be </p>
            <p className='mini-para'>happy</p>
          </div>
        </div>

        <div>
          <div className='head-para'>
            <FontAwesomeIcon icon={faFileExport} />
          </div>
          <div>
            <p className='head-para'>Manage your team with reports</p>
          </div>
          <div className='mini-para-div'>
            <p className='mini-para'>Measure what matters with untitled's easy-to-use </p>
            <p className='mini-para'>reports. You can filter, export, drilldown on the</p>
            <p className='mini-para'>data in a couple clicks.</p>
          </div>
        </div>
      </div>

      <div className='scnd-div'>

        <div>
          <div className='head-para'>
            <FontAwesomeIcon icon={faWaze} />
          </div>
          <div>
            <p className='head-para'>Connect with customers</p>
          </div>
          <div className='mini-para-div'>
            <p className='mini-para'>Whether you have a team of 2 or 200, our shares </p>
            <p className='mini-para'>team inboxes keep everyone on the same page</p>
            <p className='mini-para'>and in the loop</p>
          </div>
        </div>

        <div>
          <div className='head-para'>
            <FontAwesomeIcon icon={faSquarespace} />
          </div>
          <div>
            <p className='head-para'>Connect the tool you already use</p>
          </div>
          <div className='mini-para-div'>
            <p className='mini-para'>An all-in-one customer service platform that helps </p>
            <p className='mini-para'>you balance everything your customers need to be </p>
            <p className='mini-para'>happy</p>
          </div>
        </div>

        <div>
          <div className='head-para'>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div>
            <p className='head-para'>Our people make the difference</p>
          </div>
          <div className='mini-para-div'>
            <p className='mini-para'>Measure what matters with untitled's easy-to-use </p>
            <p className='mini-para'>reports. You can filter, export, drilldown on the</p>
            <p className='mini-para'>data in a couple clicks.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Features