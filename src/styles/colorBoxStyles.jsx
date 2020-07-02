import chroma from 'chroma-js';

export default{
    colorBox: {
        width: '20%',
        height: props => props.showingFullPalette ? '25%' : '50%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover button' : {
            opacity: '1'
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() > 0.1 ? 'black' : 'white'
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.1 ? 'white' : 'black'
    },
    SeeMore: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        border: 'none',
        right: '0',
        bottom: '0', 
        color: props => chroma(props.background).luminance() > 0.1 ? 'rgba(0, 0, 0, 0.8)' : 'white',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
        margin: '0',
    },
    copyButton: {
        color: props => chroma(props.background).luminance() > 0.1 ? 'rgba(0, 0, 0, 0.8)' : 'white',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginTop: '-15px',
        marginLeft: '-50px',
        textAlign: 'center',
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        texTtransform: 'uppercase',
        border: 'none',
        transition: '0.4s',
        cursor: 'pointer',
        textDecoration: 'none',
        opacity: '0'
    },
    boxContent: {
        position: 'absolute',
        padding: '10px',
        width: '100%',
        left: '0',
        bottom: '0',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },
    copyOverlay: {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        transform: 'scale(0.1)'
    },
    showOverlay: {
        position: 'absolute',
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
    },
    copyMessage: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        '& h1': {
            fontWeight: '400',
            textShadow: '1px 1.5px black',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
            padding: '1rem',
            textTransform: 'uppercase',
        },
        '& p': {
            fontSize: '2rem',
            fontWeight: '100',
        }
    },
    showMessage: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s',
        transitionDelay: '0.3s',
    }
}