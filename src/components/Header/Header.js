import React from "react";
import './Header.css'

const useStyles = createUseStyles({
    header: {
        backgroundColor: '#222',
        color: 'white',
        padding: '10px',
        textAlign: 'center'
    },
    profileImage: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '10px'
    },
    textContent: {
        paddingTop: '10px'
    },
    heading: {
        fontSize: '2.5rem',
        margin: '0'
    },
    proffesion: {
        fontSize: '1.5rem',
        margin: '0'
    }
});

function Header(props) {
    const classes = useStyles()
    return (
        <header className={classes.header}>
            <div className={classes.headerContent}>
                <img src={require('./img.webp').default} alt="Profile" className={classes.profileImage} />
                <div className={classes.textContent}>
                    <h1 className={classes.heading}>{props.name}</h1>
                    <p className={classes.profession}>{props.proffesion}</p>
                </div>
            </div>
        </header>
    );
}

export default Header;