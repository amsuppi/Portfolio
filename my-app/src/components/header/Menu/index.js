import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

function HeaderMenu() {
    return(
        <div>
            <div>
            <h3>Write a review</h3>
            <h3>Events</h3>
            <h3>Talk</h3>
            </div>
            <div>
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    )
}
export default HeaderMenu;