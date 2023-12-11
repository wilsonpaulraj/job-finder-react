import React from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';

const Jobs = () => {

    const jobs = [
        {
            img: "",
            role: "wrghet",
            company: "Apple",
            location: "Cupertino, CA",
            description: `Working as a Software Engineer Intern in the Apple Developer Tools team. `
                + `Responsible for improving and maintaining various tools used by Apple developers.`
        },
        {
            img: "",
            role: "eetq",
            company: "Apple",
            location: "Cupertino, CA",
            description: `Working as a Software Engineer Intern in the Apple Developer Tools team. `
                + `Responsible for improving and maintaining various tools used by Apple developers.`
        },
        {
            img: "",
            role: "erg",
            company: "Apple",
            location: "Cupertino, CA",
            description: `Working as a Software Engineer Intern in the Apple Developer Tools team. `
                + `Responsible for improving and maintaining various tools used by Apple developers.`
        }

    ]

    return (
        <div>
            <div className='hot-jobs'>
                <h2>Hot Jobs</h2>
                <h2><Link to="/search-jobs">See more</Link></h2>
            </div>
            <div className='jobs-list'>
                <ul>
                    {
                        jobs.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className='job-desc'>
                                        <img src={item.img} alt="job" />
                                        <div>
                                            <h3>{item.role}</h3>
                                            <span>{item.company}</span>
                                            <br />
                                            <a href="#">{item.location}</a>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default Jobs