import React from 'react';

const OverlappingGallery = () => {
    return (
        <div className="dark-section-wrapper" style={{ backgroundColor: '#0c0c0c' }}>
            <div className="dark-section-container content-max-width">
                <div className="content-row full text-align-center row_padding_left row_padding_right dark-section">
                    <div id="itemsWrapperLinks">
                        <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
                            <div className="overlapping-gallery">
                                {/* Gallery Items */}
                                <GalleryItem
                                    linkHref="project01.html"
                                    imgSrc="/img/1.jpg"
                                    title="White Liners"
                                    date="2024"
                                    category="Photography"
                                    transform="translate(0px, 1642px)"
                                />
                                <GalleryItem
                                    linkHref="project02.html"
                                    imgSrc="/img/2.jpg"
                                    title="Green Audio"
                                    date="2024"
                                    category="Photography"
                                    transform="translate(0px, 991px)"
                                />
                                <GalleryItem
                                    linkHref="project03.html"
                                    imgSrc="images/03hero.jpg"
                                    title="Nanotech"
                                    date="2024"
                                    category="Branding"
                                    transform="translate3d(0px, 0px, 0px) scale(0.8805, 0.8805)"
                                />
                                <GalleryItem
                                    linkHref="project04.html"
                                    imgSrc="images/04hero.jpg"
                                    title="Cool Dude"
                                    date="2024"
                                    category="Video Production"
                                    videoSrc="images/04hero.mp4"
                                />
                                <GalleryItem
                                    linkHref="project05.html"
                                    imgSrc="images/05hero.jpg"
                                    title="Sphere Digital"
                                    date="2024"
                                    category="Graphic Design"
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="has-opacity">
                        <span style={{ opacity: 0.2 }}>CRAFTING WEBSITES WHERE THE ELEGANCE</span>
                        <br className="destroy" />
                        <span style={{ opacity: 0.2 }}>OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING PRODUCTS.</span>
                    </p>
                    <div className="button-box text-align-center has-animation fadeout-element">
                        <div className="clapat-button-wrap parallax-wrap hide-ball">
                            <div className="clapat-button parallax-element">
                                <div className="button-border outline rounded parallax-element-second">
                                    <a className="ajax-link" href="index-showcase-grid.html" data-type="page-transition">
                                        <span data-hover="See All Works">See All Works</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GalleryItem = ({ linkHref, imgSrc, title, date, category, videoSrc, transform }) => (
    <div className="pin-spacer" style={{ width: '632px', height: '651px', transform }}>
        <div className="overlapping-image" style={{ height: '651px', transform }}>
            <div className="overlapping-image-inner trigger-item" style={{ transform }}>
                <div className="img-mask">
                    <a className="slide-link" href={linkHref}></a>
                    <div className="section-image trigger-item-link">
                        <img src={imgSrc} className="item-image grid__item-img" alt="" />
                        {videoSrc && (
                            <div className="hero-video-wrapper">
                                <video loop muted className="bgvid">
                                    <source src={videoSrc} type="video/mp4" />
                                </video>
                            </div>
                        )}
                    </div>
                    <img src={imgSrc} className="grid__item-img grid__item-img--large" alt="" />
                </div>
                <div className="slide-caption trigger-item-link-secondary">
                    <div className="slide-title primary-font-title"><span>{title}</span></div>
                    <div className="slide-date"><span>{date}</span></div>
                    <div className="slide-cat"><span>{category}</span></div>
                </div>
            </div>
        </div>
    </div>
);

export default OverlappingGallery;
