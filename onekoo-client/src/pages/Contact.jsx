import React from "react";
import Carousel from '../components/Contact/Carousel';
import Conta from '../components/Contact/Conta.jsx';
import Comment from '../components/Contact/comment.jsx';

const Contact = () => {
    return (
        <React.Fragment>
            <div className="h-auto w-auto bg-white">
                <Carousel />
                <Conta />
                <Comment />
            </div>
        </React.Fragment>
    )
}

export default Contact;