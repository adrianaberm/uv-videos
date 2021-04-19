import React from 'react';
import Image from 'next/image'
import { HeaderLogo, HeaderInner } from './Styled';

const Header = () => {
    return(
        <HeaderLogo>
            <HeaderInner>
                <Image
                    src="/assets/uv-logo.png"
                    alt="Uv Logo"
                    width={150}
                    height={30}
                />
            </HeaderInner>
        </HeaderLogo>
    )
}

export default Header; 