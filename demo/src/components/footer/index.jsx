import React from 'react';

export const Footer = (props) => {
    const { config } = props;
    const { title } = config;
    return (
    <footer>{title}</footer>
    )
}
