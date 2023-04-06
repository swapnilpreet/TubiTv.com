import React from 'react';
import './style.scss';

// this custommm compoents kep our application center 

const ContentWrapper = ({children}) => {
  return (
    <div className='contentWrapper'>{children}</div>
  )
}

export default ContentWrapper