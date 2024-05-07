import React from 'react';

const Button = () => {
    return (
        <div>
            <div className="video">
                <svg className="btn">
                    <circle className="fill" stroke="none" cx="40" cy="40" r="37.5"/>
                    <circle className="outline" fill="none" cx="40" cy="40" r="37.5"/>
                    <polygon className="triangle" stroke="none" points="28,20.4 62,40 28,59.6 "/>
                </svg>
            </div>

        </div>
    );
};

export default Button;