import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID || "G-XXXXXXXXXX";

export default function Analytics() {
    const location = useLocation();

    useEffect(() => {
        // Initialize GA4 only once
        if (!window.ga4Initialized) {
            ReactGA.initialize(GA_MEASUREMENT_ID);
            window.ga4Initialized = true;
        }
    }, []);

    useEffect(() => {
        // Send pageview on route change
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    return null;
}

// Add type definition for the global flag
declare global {
    interface Window {
        ga4Initialized?: boolean;
    }
}
