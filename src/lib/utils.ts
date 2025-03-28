
import React from 'react';
import Button from '../components/button'; // Correctly import the Button component

export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}


export const CustomButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ 
    children,
    className,
    ...props 
}) => {
    return (
        <Button className={`btn btn-primary ${className}`} {...props}>
            {children}
        </Button>
    );
};
