import React from 'react';
import {Link} from 'react-router-dom'

const formatDuration = duration => {
    let hours = +(duration / 60).toFixed(0);
    let minutes = duration % 60;

    return `${hours ? `${hours} hours` : ''} ${minutes ? `${minutes} minutes` : ''}`;
};

export const CourseItem = ({id, title, duration, createDate, description, onEdit, onDelete}) => (
    <section className="course-item">
        <div className="row ">
            <div className="col-xs-9">
                <div className="row">
                    <div className="col-xs-3">
                        <h4>{title}</h4>
                    </div>
                    <div className="col-xs-5 duration">
                        {formatDuration(duration)}
                    </div>
                    <div className="col-xs-4">
                        {createDate}
                    </div>
                </div>
                <p>{description}</p>
            </div>
            <div className="col-xs-3">
                <button className="btn btn-info btn-block" type="button">
                    <Link onClick={onEdit} to='/new'>Edit</Link>
                </button>
                <button onClick={onDelete} className="btn btn-danger btn-block" type="button">
                    Delete
                </button>
            </div>
        </div>
    </section>
);