export default{
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    paletteColors: {
        height: '90%',
    },
    goBack: {
        width: '20%',
        height: '50%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        opacity: '1',
        backgroundColor: 'black',
        '& a':{
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
            color: 'white',
            textTransform: 'uppercase',
            border: 'none',
            transition: '0.4s',
            cursor: 'pointer',
            textDecoration: 'none',
        }
    }
}