import React from 'react';
import {Link} from 'react-router-dom';


export const CoursesNav = ({searchValue, onSearchInput, onSearch, onAdd}) => (
    <nav className="courses-nav">
        <div className="row">
            <div className="col-xs-6">
                <input
                    value={searchValue}
                    onChange={onSearchInput}
                    className="form-control"
                    type="text"
                    placeholder="Search by name"/>
            </div>
            <div className="col-xs-2">
                <button
                    onClick={onSearch}
                    className="btn btn-default">
                    Find
                </button>
            </div>
            <div className="col-xs-4 text-right">
                <button className="btn btn-default">
                    <Link onClick={onAdd} to='/new'>Add course</Link>
                </button>
            </div>
        </div>
    </nav>
);
