import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
    children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [displayChildren, setDisplayChildren] = useState(children);
    const location = useLocation();

    useEffect(() => {
        // Start exit animation
        setIsVisible(false);
        
        // After exit animation, update content and start enter animation
        const timer = setTimeout(() => {
            setDisplayChildren(children);
            setIsVisible(true);
        }, 150); // Half of the transition duration

        return () => clearTimeout(timer);
    }, [location.pathname, children]);

    useEffect(() => {
        // Initial load
        setIsVisible(true);
    }, []);

    return (
        <div 
            className={`page-transition ${isVisible ? 'page-visible' : 'page-hidden'}`}
            style={{
                transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
            }}
        >
            {displayChildren}
        </div>
    );
};

export default PageTransition;
