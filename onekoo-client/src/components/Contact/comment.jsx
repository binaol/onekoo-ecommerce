import React from "react";

const Comment = () => {
    return (
        <React.Fragment>
            <div>
            {/* component */}
                <section className="text-primary body-font relative">
                    <div className="absolute inset-0 bg-white">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d912.1194227766556!2d38.73593969644911!3d9.01130182112948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sonekoo%20coffee!5e0!3m2!1sen!2set!4v1719588032249!5m2!1sen!2set"
                        style={{}}
                    />
                    </div>
                    <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-primary text-lg mb-1 font-medium title-font">
                        Feedback
                        </h2>
                        <p className="leading-relaxed mb-5 text-primary">
                        Post-ironic portland shabby chic echo park, banjo fashion axe
                        </p>
                        <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-primary">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        </div>
                        <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-primary">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            defaultValue={""}
                        />
                        </div>
                        <button className="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
                        Send
                        </button>
                        <p className="text-xs text-primary mt-3">
                        Chicharrones blog helvetica normcore iceland tousled brook viral
                        artisan.
                        </p>
                    </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default Comment;