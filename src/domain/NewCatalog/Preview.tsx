import * as React from 'react';
import categoryImage from '../../img/category-image1.png';
import './lib/styles.css';
import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 40,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 768,
        },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 30,
    },
    mobile: {
        breakpoint: {
            max: 767,
            min: 0,
        },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 30,
    },
};

export class Preview extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            catalogs: this.props.catalogsData,
        };
    }

    render() {
        const { catalogs } = this.state;
        return (
            <div className="select-dashboard">
                <div className="select-dashboard-heading">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="heading-image">
                                <img src={categoryImage} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-9 col-sm-12">
                            <div className="heading-text">
                                <h3>{catalogs.catalogName}</h3>
                                <p>{catalogs.catalogDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-frame">
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                        infinite={true}
                        containerClass="carousel-container"
                        itemClass="carousel-item-padding-0"
                    >
                        <div>
                            <iframe width="100%" height="370" src="https://eazybi.com/accounts/1/embed/report/1?disable_actions"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="370" src="https://eazybi.com/accounts/1/embed/report/1?disable_actions"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="370" src="https://eazybi.com/accounts/1/embed/report/1?disable_actions"></iframe>
                        </div>
                        <div>
                            <iframe width="100%" height="370" src="https://eazybi.com/accounts/1/embed/report/1?disable_actions"></iframe>
                        </div>
                    </Carousel>
                </div>
            </div>
        );
    }
}