import React from 'react'
import blackboy from '../assets/blackboy.png'
import oliva from '../assets/oliva.png'
import glassgirl from '../assets/glassgirl.png'

function Faq() {
    return (
        <div className='main-div'>
            <div>
                <div className='ask-qsn'><p>Frequently asked question</p    ></div>
                <div>
                    <p className='top-para'>Everything you need to know about the product and billing.</p>
                </div>
            </div>

            <div className="faq-container">
                <div className="faq-item">
                    <div className="faq-question">
                        <span>Is there a free trial available?</span>
                        <span>−</span>
                    </div>
                    <div className="faq-answer">
                        Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        <span>Can I change my plan later?</span>
                        <span>+</span>
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        <span>What is your cancellation policy?</span>
                        <span>+</span>
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        <span>Can other info be added to an invoice?</span>
                        <span>+</span>
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        <span>How does billing work?</span>
                        <span>+</span>
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question">
                        <span>How do I change my account email?</span>
                        <span>+</span>
                    </div>
                </div>
            </div>


            <div className='third-div'>
                <div className='avtr-grp'>
                    <img src={blackboy} alt="" />
                    <img src={oliva} alt="" />
                    <img src={glassgirl} alt="" />
                </div>

                <div className='qstn'>
                    <p>Still have questions ?</p>
                </div>
                <div >
                    <p className='top-para'>cant't find the answer you'r looking for ? Please chat to our friendly team.</p>
                </div>
                <div className='btn'>
                    <button className='btn2'>Get in touch</button>
                </div>

            </div>
        </div>
    )
}

export default Faq