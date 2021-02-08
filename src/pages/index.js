import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import projectsJSON from '../content/json/projects.json'

const { featured, articles } = projectsJSON

const Wrapper = s.div`
  body {
    font-family: 'PT Serif', serif;
    font-style: normal;
    margin: 0;
  }

  nav img {
    width: 125px;
    display: block;
    margin: auto;
    padding: 15px 0;
  }

  h1, h2 {
    margin: 85px 0 10px;
    font-family: 'futura-pt', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 72px;
    text-align: center;
  }

  h1 {
    color: #4BBFBE;
  }

  h2 {
    margin: 20px 0 25px;
    font-size: 50px;
  }

  hr {
    margin: 35px 0;
  }

  a, a:visited {
    text-decoration: none;
    color: inherit;
  }

  a:hover, a:active, a:focus {
    text-decoration: none;
    color: #4BBFBE;
  }

  footer {
    margin: 20px auto;
    text-align: center;
  }

  footer hr {
    margin-bottom: 20px;
  }

  .container {
    margin: 0 auto;
  }

  .row {
    margin: 0;
  }

  .article-row {
    display: flex;
    align-items: flex-end;
  }

  .featured-row {
    padding: 0;
  }

  .featured {
    padding: 15px 15px 0;
  }

  .top:first-of-type {
    border-right: 1px solid #EEE;
    padding-right: 40px;
  }

  .top:last-of-type {
    padding-left: 40px;
  }

  .info {
    font-family: "futura-pt", sans-serif;
    text-transform: uppercase;
    color: #999;
    font-size: 20px;
    padding-bottom: 0;
  }

  .tag {
    font-weight: 700;
    padding-left: 0;
  }

  .date {
    font-weight: 400;
    text-align: right;
    padding-right: 0;
  }

  .top-tag, .top-date {
    padding-top: 15px;
  }

  .title {
    font-family: "futura-pt", sans-serif;
    color: #000;
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
  }

  .featured-title {
    font-weight: 700;
    font-size: 38px;
    padding-bottom: 15px;
  }

  .description {
    font-size: 20px;
  }

  .credits {
    color: #999;
    font-size: 15px;
    padding-top: 15px;
  }

  ::selection {
    background: #4BBFBE;
    color: #FFF;
  }

  @media screen and (max-width: 991px) {
    hr {
      margin: 30px 0;
    }

    .article-row {
      flex-direction: column;
    }

    .article-info {
      padding-top: 15px;
    }

    .top:first-of-type {
      border-right: none;
      border-bottom: 1px solid #EEE;
      padding: 0 15px 30px;
    }

    .top:last-of-type {
      padding: 30px 15px 0;
    }
  }
`

const URL = ({ link, children }) => {
  if (link.includes('http'))
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  return (
    <Link to={link} target="_blank" rel="noreferrer">
      {children}
    </Link>
  )
}

const FeaturedArticle = ({
  image,
  alt,
  section,
  date,
  description,
  sponsored,
  author,
  link,
  title
}) => (
  <>
    <div className="col-md-7 featured">
      <img src={image} className="img img-responsive" alt={alt} />
    </div>
    <div className="col-md-5 featureed">
      <div className="row info">
        <div className="col-xs-6 tag">{section}</div>
        <div className="col-xs-6 date">{date}</div>
      </div>
      <div className="row title featured-title">
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
      <div className="row description">{description}</div>
      <div className="row credits">
        {sponsored ? `Sponsored by ${author}` : author}
      </div>
    </div>
  </>
)

const SecondaryFeaturedArticle = ({
  image,
  alt,
  section,
  date,
  description,
  sponsored,
  author,
  link,
  title
}) => (
  <div class="col-md-6 top">
    <div class="row">
      <img src={image} class="img img-responsive" alt={alt} />
    </div>
    <div class="row info">
      <div class="col-xs-6 tag top-tag">{section}</div>
      <div class="col-xs-6 date top-date">{date}</div>
    </div>
    <div class="row title">
      <a href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
    </div>
    <div class="row description">{description}</div>
    <div class="row credits">
      {sponsored ? 'Sponsored by ' : ''}
      {author}
    </div>
  </div>
)

const Article = ({
  image,
  alt,
  section,
  date,
  description,
  sponsored,
  author,
  link,
  title
}) => (
  <div className="row article-row">
    <div className="col-md-4">
      <img src={image} className="img img-responsive" alt={alt} />
    </div>
    <div className="col-md-8 article-info">
      <div className="row info">
        <div className="col-xs-6 tag">{section}</div>
        <div className="col-xs-6 date">{date}</div>
      </div>
      <div className="row title">
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
      <div className="row description">{description}</div>
      <div className="row credits">
        {sponsored ? `Sponsored by ${author}` : author}
      </div>
    </div>
  </div>
)

const Index = () => (
  <Wrapper>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Projects | 34th Street</title>
      <meta
        name="description"
        content="This site showcases the work done by the DP's web development department, such as project pages for special issues or standalone interactives"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
      />
    </Helmet>

    <nav class="navbar navbar-inverse navbar-fixed-top">
      <a href="https://www.34st.com" target="_blank">
        <img
          src="https://snworksceo.imgix.net/dpn-34s/f565f073-350e-4a86-aee9-1d2a3f3798ac.sized-1000x1000.png?"
          alt="34th Street"
        />
      </a>
    </nav>

    <div class="container">
      <h1>PROJECTS &amp; GUIDES</h1>

      <div className="row article-row featured-row">
        <FeaturedArticle {...featured[0]} />
      </div>

      <hr />

      <div className="row">
        {featured.slice(1).map(article => (
          <SecondaryFeaturedArticle {...article} />
        ))}
      </div>

      <hr />

      <h2>All Projects</h2>

      <div id="articles">
        {articles.map((article, idx) => (
          <>
            <Article {...article} />
            {idx !== articles.length - 1 && <hr />}
          </>
        ))}
      </div>

      <footer>
        <hr />
        <p>
          Made with <span role="img">💖</span> &nbsp;by&nbsp;
          <a href="https://tech.thedp.com/" target="_blank" rel="noreferrer">
          the DP Tech Department
          </a>
          &nbsp;&copy; The Daily Pennsylvanian 2021
        </p>
      </footer>
    </div>
  </Wrapper>
)

export default Index
