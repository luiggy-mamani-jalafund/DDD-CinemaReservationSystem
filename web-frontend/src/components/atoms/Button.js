"use client";

import React from 'react';
import Image from 'next/image';

const Button = ({ label, onClick, type = 'button', className = '', disabled = false, icon }) => {
    return (
        <button
            type={type}
            className={`button ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && (
                <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
                    <Image src={icon} alt="" width={20} height={20} style={{ filter: 'invert(1)' }} /> {}
                </span>
            )}
            {label}
        </button>
    );
};

export default Button;
