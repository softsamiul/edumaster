import React from 'react';
import aboutImg from '../../images/about-us.png';
import accunture from '../../images/company-logo/accenture.png';
import cognizint from '../../images/company-logo/cognizint.png';
import flipkart from '../../images/company-logo/flipkart.png';
import infosys from '../../images/company-logo/infosys.png';
import mahindra from '../../images/company-logo/mahindra.webp';
import tata from '../../images/company-logo/tata.png';
import wipro from '../../images/company-logo/wipro.png';
import './AboutComp.css';
const AboutComp = () => {
    return (
        <div className="w-4/5 mx-auto mb-10">
            <div className="flex justify-between items-center">
                <div className="w-2/4">
                    <img className="h-80" src={aboutImg} alt="About us img" />
                </div>
                <div className="w-2/4">
                    <h2 className="text-4xl font-bold mb-2">Achieve Your Goals</h2>
                    <p className="text-basic">We are a modern, global school for a modern, global academic experience. We offer world's top quality education. Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision. Talk with instructors, ask questions, answer live polls, and get your doubts cleared - all while the class is going on.</p>
                </div>
            </div>
            <div className="py-12">
                <h2 className="text-4xl font-bold text-center mb-10">Trusted Company</h2>
                <div className="w-3/4 mx-auto grid grid-cols-7 gap-2 h-24">
                    <div>
                        <img className="h-16 rounded-full" src={wipro} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={accunture} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={tata} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={infosys} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={cognizint} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={flipkart} alt="" />
                    </div>
                    <div>
                        <img className="h-16 rounded-full" src={mahindra} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComp;