import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'

import './Modal.css';

const modal = (props) => {
    const animationTiming = {
        enter: 400,
        exit: 1000
    }

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.show}
            timeout={animationTiming}
            onEnter={() => console.log('onEnter')}
            onEntering={() => console.log('onEntering')}
            onEntered={() => console.log('onEntered')}
            onExit={() => console.log('onExit')}
            onExiting={() => console.log('onExiting')}
            onExited={() => console.log('onExited')}
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed'
                // appear:
                // appearActive:
            }}
        >
            {state => <div className="Modal">
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
            }
        </CSSTransition>
    )
}

export default modal;