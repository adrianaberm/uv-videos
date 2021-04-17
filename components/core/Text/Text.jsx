import React from 'react'

const Text = ({as: Element,className, children, color, size,rest}) => (
    <Element className={className} {...rest} >{children}</Element>
);

export default Text; 