"use client";

import React from 'react';
import styles from '../../styles/modules/Button.module.scss';
import Image from 'next/image';

const Button = ({ label, onClick, type = 'button', className = '', disabled = false, icon }) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && (
                <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
                    <Image src={icon} alt="" width={20} height={20} style={{ filter: 'invert(1)' }} /> {/* Aplica un filtro de inversión si es necesario */}
                </span>
            )}
            {label}
        </button>
    );
};

export default Button;
