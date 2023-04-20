
import React, { useEffect, useState } from 'react'
import '../componet/Dashboard.css'
import Blogcard from './Blogcard'

const Dashboard = () => {
    const [loadder, setLoadder] = useState(true);
    const [blogDatas, setBlogDatas] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoadder(false);
            setBlogDatas([
                { id: 1, title: "lorem okd iuhghh", describe: "loreremjhfhdfdfhfhjfh" },
                { id: 2, title: "lorem okd iuhghh", describe: "loreremjhfhdfdfhfhjfh" },
                { id: 3, title: "lorem okd iuhghh", describe: "loreremjhfhdfdfhfhjfh" },
                { id: 4, title: "lorem okd iuhghh", describe: "loreremjhfhdfdfhfhjfh" },
                { id: 5, title: "lorem okd iuhghh", describe: "loreremjhfhdfdfhfhjfh" },
                { id: 6, title: "lorem okd iuhghh", describe: "loreremjhfhdfdfhfhjfh" },
                { id: 7, title: "lorem okd iuhghh", describe: "loreremjhfhdfdfhfhjfh" },
            ])
        }, 5000);

    }, [])
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h4>Vegetable</h4>
                                <p>Vegetables are edible plants that are typically consumed for their nutritional value and health benefits. They come in various shapes, sizes, and colors, and can be eaten raw or cooked in a variety of ways.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__480.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h4>Fruits</h4>
                                <p>Fruits are the matured ovaries of flowering plants that contain seeds and are usually sweet or tart in taste. They come in a wide variety of shapes, sizes, colors, and flavors..</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153__340.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h4>Fruit/vegetable</h4>
                                <p>Fruits and vegetables are edible parts of plants that are consumed for their nutritional value and health benefits. They are naturally occurring and come in a wide variety of shapes, sizes, colors, and flavors.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            {
                loadder ?
                    <div className="loader"></div>
                    :
                    <div className="container col-xxl-8 px-4 py-5" style={ { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' } }>
                        {
                            blogDatas.map((data, index) => (
                                <div key={ index }>
                                    <Blogcard
                                        all={ data }
                                    />
                                </div>
                            ))
                        }
                    </div>
            }

        </div>
    )


}

export default Dashboard
