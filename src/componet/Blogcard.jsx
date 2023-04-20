import React from 'react'
import '../componet/Blogcard.css'

const Blogcard = () => {
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="card" style={ { width: "18rem" } }>
                    <img style={ { height: '200px' } } src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201511/kiwi-story_647_112415083647.jpg?VersionId=.U_9Bi4TQTH_5s1huF7ez3XVVt1DgQMg&size=690:388" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">kiwi</h5>
                        <p className="card-text">the kiwi fruit is known for its distinctive appearance, with its fuzzy brown exterior and vibrant green or golden flesh inside. </p>
                        <a href="#" className="btn btn-primary">lern more</a>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Blogcard
