import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Erorr = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => { 
            router.push('/');
         }, 2000)
    }, []);
  return (
    <div>
        Page not found &#128579;
    </div>
  )
}

export default Erorr