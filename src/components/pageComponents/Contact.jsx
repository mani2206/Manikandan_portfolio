import React from 'react';

const Contact = () => {
  const contactStyle = {
    backgroundImage: 'url("/images/blog-3.jpg")',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  };

  return (
    <>
      <div   className='contacts w-100  text-center' style={contactStyle} id = "contact">
        <h4>Contact</h4>
        <div className='line_contact  text-center'></div>
        <div className='text-white py-2 fs-4'  data-aos="zoom-in-up"><span className='email  fw-bold ' style={{color:"#e12c5b"}}>Email:</span>Mani220696@gmail.com</div>
        <div className='text-white fs-4'  data-aos="zoom-in-up"><span className='phone fw-bold ' style={{color:"#e12c5b"}}>Phone:</span>9047578635</div>
      </div>
    </>
  );
};

export default Contact;
