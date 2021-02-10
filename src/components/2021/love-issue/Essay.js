import React, {Component} from 'react'
import Img from 'gatsby-image'
//import Carousel from 'react-bootstrap/Carousel'
import {Container, Tag, Author, LoveHeading} from '../../shared/index.js'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


class EssayCarousel extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      isShow: true,
		};

  }
 
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
	};
	
  render() {
    return (
			<>
				<div style={{ margin: '0 2rem' }}>
					<LoveHeading color='#FDB6B0'>{'ESSAY WINNERS'}</LoveHeading>
				</div>
				<Carousel
					swipeable={false}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					autoPlay={this.props.deviceType !== "mobile" ? true : false}
					autoPlaySpeed={3500}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					deviceType={this.props.deviceType}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
				>
					{this.props.articles &&
					this.props.articles.map(article => (  
					<Container>
						<Tag>
							<p style={{marginBottom: "0.2rem"}}>{article.title}</p>
							<Author>BY {article.author}</Author>
						</Tag>
						<Img fluid={article.img.childImageSharp.fluid}/>
					</Container>
					))}
					
			</Carousel>
		</>
    );
  }
}



export default EssayCarousel