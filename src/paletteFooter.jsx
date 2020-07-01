import React from 'react'

export default function paletteFooter(props) {
    const {paletteName, emoji} = props;
    
    return (
        <footer className='palette-footer'>
            {paletteName}
            <span className="emoji">{emoji}</span>
        </footer>
    )
}

