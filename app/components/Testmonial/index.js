import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import Slider from "react-slick";
import './style.scss'

// images 
import test1 from 'images/test/img1.jpg'
import test2 from 'images/test/img2.jpg'
import test3 from 'images/test/img3.jpg'

const testmonials = [
    {
        image: test1,
        name: 'Pete Elzer - Owner / Apex Plastic Finishing',
        desig: '',
        text: 'GMedChain simply delivers the purest healthcare audience on the internet, and being there has helped us connect with new customers in new markets. Our program absolutely pays for itself and more.',
        id: 1
    },
    {
        image: test2,
        name: 'Tracy Tenpenny - Partner / Tailored Label Products',
        desig: '',
        text: 'I couldn’t ask for a better ‘salesperson’ than GMedChain.com. For every ten dollars I’m spending there, I’m getting forty dollars in new business.',
        id: 2
    },
    {
        image: test3,
        name: 'Karen Norheim, EVP / American Crane & Equipment Corporation',
        desig: '',
        text: 'Our business expanded to three new markets in just 4 months, and GMedChain.com was an integral part of making that happen. We’re creating this whole other avenue of a sales pipeline that we didn’t have before, and we’re reaching people that we wouldn’t have reached before.',
        id: 3
    },
    {
        image: test1,
        name: 'Tracy Tenpenny - Partner / Tailored Label Products',
        desig: '',
        text: 'I couldn’t ask for a better ‘salesperson’ than GMedChain.com. For every ten dollars I’m spending there, I’m getting forty dollars in new business.',
        id: 4
    },
]

const Testmonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <Grid className="testmonialArea ptb-104">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title="What People Say"
                    />
                </Grid>
                <Grid xs={12} item>
                    <Slider
                        className="testSliders"
                        {...settings}>
                        {testmonials.map((item, i) => (
                            <Grid key={i} className="testWrap">
                                <Grid className="testItem">
                                    <span className="image">
                                        <img src={item.image} alt="" />
                                    </span>
                                    <h4>{item.name}</h4>
                                    <span>{item.desig}</span>
                                    <p>{item.text}</p>
                                </Grid>
                            </Grid>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Testmonial;
