import { useEffect } from 'react';
import { WOW } from 'wowjs';

const useWOW = () => {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);
};

export default useWOW;
