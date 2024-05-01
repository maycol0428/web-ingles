import React from 'react';

function BackIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size || "24"}
            height={props.size || "24"}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
    );
}

export default BackIcon;