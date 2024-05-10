import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Delay the scroll reset to ensure the new page content has rendered
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10); // The delay can be adjusted based on the rendering time of your pages
    }, [location]); // Dependency on location ensures this runs on route change

    return null;
};

export default ScrollToTop;