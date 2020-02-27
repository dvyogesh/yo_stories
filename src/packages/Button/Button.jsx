import React from 'react';
import ButtonWarapper from './buttonStyles'
const Button = ({children, onClick}) => (
    <ButtonWarapper>
        <button onClick={onClick}>{children}</button>
    </ButtonWarapper>
);

export default Button;