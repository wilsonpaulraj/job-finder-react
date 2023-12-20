import React, { useState, useEffect } from 'react';
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';
import './EmployeeSpotlight.css';

const employees = [
  {
    name: 'John Doe',
    company: 'Tech Co.',
    role: 'Software Engineer',
    description: 'qberviqev qfvi qeviqet qeb qrb qrlbtiqrb qetb qtb qt bqrbtl qrtb qrt bqrbt qrbkqrtbqtbqrb qr bqrg bqrbqrk;bqr b',
    img: '/images/employee1.jpg',
  },
  {
    name: 'Alice Smith',
    company: 'Innovate Corp.',
    role: 'UX Designer',
    description: 'qberviqev qfvi qeviqet qeb qrb qrlbtiqrb qetb qtb qt bqrbtl qrtb qrt bqrbt qrbkqrtbqtbqrb qr bqrg bqrbqrk;bqr b',
    img: '/images/employee2.png',
  },
  {
    name: 'Bob Johnson',
    company: 'Data Solutions Ltd.',
    role: 'Data Scientist',
    description: 'qberviqev qfvi qeviqet qeb qrb qrlbtiqrb qetb qtb qt bqrbtl qrtb qrt bqrbt qrbkqrtbqtbqrb qr bqrg bqrbqrk;bqr b',
    img: '/images/employee4.jpg',
  },
  {
    name: 'Eva Martinez',
    company: 'E-commerce Innovators',
    role: 'Marketing Specialist',
    description: 'qberviqev qfvi qeviqet qeb qrb qrlbtiqrb qetb qtb qt bqrbtl qrtb qrt bqrbt qrbkqrtbqtbqrb qr bqrg bqrbqrk;bqr b',
    img: '/images/employee3.jpg',
  },
  {
    name: 'Michael Williams',
    company: 'Tech Innovations Inc.',
    role: 'Fullstack Developer',
    description: 'qberviqev qfvi qeviqet qeb qrb qrlbtiqrb qetb qtb qt bqrbtl qrtb qrt bqrbt qrbkqrtbqtbqrb qr bqrg bqrbqrk;bqr b',
    img: '/images/employee6.jpg',
  },
  {
    name: 'Sophia Lee',
    company: 'Future Tech Solutions',
    role: 'AI Researcher',
    description: 'qberviqev qfvi qeviqet qeb qrb qrlbtiqrb qetb qtb qt bqrbtl qrtb qrt bqrbt qrbkqrtbqtbqrb qr bqrg bqrbqrk;bqr b',
    img: '/images/employee5.jpg',
  },
];

const EmployeeSpotlight = () => {

  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className='employee-spotlight-component' style={{ position: 'relative' }} >
      {employees.map((employee, index) => (
        <div className='employee' 
          style={{
          backgroundImage: `url(${employee.img})`
        }}
        >
          <h2>{employee.name}</h2>
          <p><strong>{employee.role}</strong> at {employee.company} </p>
          <p>{employee.description}</p>

        </div>
      ))
      }
      <button  className='slider-btn' style={{ left: '0' }}><ArrowBigLeft /></button>
      <button className='slider-btn' style={{ right: '0' }}><ArrowBigRight /></button>
    </div>
  )
};

export default EmployeeSpotlight;
