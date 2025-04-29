import React, { useState, useRef, useEffect } from 'react'

const CountCard = ({ end, data }) => {
  const [number, setnumber] = useState(null);
  const ref = useRef(0);

  const counter = end/200;

  const Count = () => {
    if(ref.current < end) {
      const result = Math.ceil(ref.current + counter);
      if(result > end) return setnumber(end);
      setnumber(result);
      ref.current = result;
    }
    setTimeout(Count, 70);
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      Count();
    }
    return () => {isMounted = false};
},[end])

  return (
    <div>
      <p className='text-3xl font-sans text-blue-900'>
        {number} +
      </p>
      <p className='text-l font-sans text-blue-900'>{data}</p>
    </div>
  )
}

export default CountCard