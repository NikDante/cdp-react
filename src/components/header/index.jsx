import React from 'react';
import {Link} from 'react-router-dom';


export const Header = ({pageTitle, isAuthorized, login, onLogoff}) => (
    <header className="header">
        <div className="row">
            <div className="col-xs-5">
                <h3 className="text-center">{pageTitle}</h3>
            </div>
            <div className="col-xs-7 text-right">
                {
                    isAuthorized
                        ?
                        <div>
                            <h4>{login.toUpperCase()}</h4>
                            <Link onClick={onLogoff} to="/">Logoff</Link>
                        </div>
                        : null
                }
            </div>
        </div>
    </header>
);