import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
                            <a href="https://youtu.be/SRuFTzWNo58" target="_blank" rel="noopener noreferrer">
                              <h5 style={{ textDecoration: 'underline', cursor: 'pointer' }}>The Youtube Channel</h5>
                            </a>
          <a href="https://docs.google.com/presentation/d/1O2NBR9hRGwTIfIYx4UdRWfrskW6ENQ8ZLsX1W8g5S5U/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                              <h5 style={{ textDecoration: 'underline', cursor: 'pointer' }}>Project</h5>
                            </a>
                          
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <a src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}