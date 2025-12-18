import React from 'react';

export const CmsIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
        <path d="M14 15h3" />
        <path d="M14 18h3" />
    </svg>
);

export const DesignIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
    </svg>
);

export const AutomationIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        <path d="M12 22v-5" />
        <path d="M12 12v-5" />
        <path d="M12 7V2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" className="opacity-20" />
    </svg>
);

// Duotone Style Icons (Flaticon-esque)
// Using currentColor with opacity for secondary elements

export const CmsIconFilled = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
        <rect x="7" y="14" width="10" height="3" rx="1.5" fill="currentColor" />
        <rect x="7" y="6" width="4" height="2" rx="1" fill="currentColor" />
    </svg>
);

export const DesignIconFilled = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M7 14.5C7 14.5 9 17 12 17C15 17 17 14.5 17 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="9" r="2" fill="currentColor" />
        <circle cx="15" cy="9" r="2" fill="currentColor" />
    </svg>
);

export const AutomationIconFilled = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
        <path d="M12 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 12L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 12L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
