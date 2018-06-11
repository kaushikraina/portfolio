import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ReactFitText from 'react-fittext';

import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import StarRatingComponent from 'react-star-rating-component';



class Skills extends Component {
  constructor() {
    super();
    this.state = {
      rating: 4,
    }
  }
  render() {
    const { rating } = this.state;
    return (

      <div style={{ "margin-top": "10%" }}>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        
        <h1 class="animated infinite jello">
          Languages
        </h1>

        <CardDeck>
          <div style={{ "height": "10%", "width": "38%" }}>
            <Card >
              <CardImg top width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1200px-The_C_Programming_Language_logo.svg.png" alt="C programming" />
              <CardBody>
                <CardText>
                  <div>
                    <ReactFitText>
                      <p>Proficiency </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c"
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starCount={5}
                      value={4}
                    />

                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>


          <div style={{ "height": "10%", "width": "38%" }}>
            <Card>
              <CardImg top width="10%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="C++ programming" />
              <CardBody>
                <CardText>
                  <div>
                    <ReactFitText>
                      <p>
                        Proficiency
                    </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c++"
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starCount={5}
                      value={4}
                    />
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>

          <div style={{ "height": "10%", "width": "38%" }}>
            <Card>
              <CardImg top width="10%" src="https://vignette.wikia.nocookie.net/logopedia/images/2/26/Java.png/revision/latest?cb=20120902073224" alt="java programming" />
              <CardBody>
                <CardText>
                  <div >
                    <ReactFitText>
                      <p>
                        Proficiency
                    </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c"
                      editing={false}
                      renderStarIcon={() => <h6>★</h6>}
                      starCount={5}
                      value={3}
                    />
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>

        </CardDeck>

        

          {/* Frontend */ }

          <h1 class="animated infinite jello">
          Front End Technologies
          </h1>

           <CardDeck>
          <div style={{ "height": "10%", "width": "38%" }}>
            <Card >
              <CardImg top width="100%" src="https://www.mytechlogy.com/upload/by_users/simpalm/231401074156and.png" alt="Android application development" />
              <CardBody>
                <CardText>
                  <div>
                    <ReactFitText>
                      <p>Proficiency </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c"
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starCount={5}
                      value={4}
                    />

                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>


          <div style={{ "height": "10%", "width": "38%" }}>
            <Card>
              <CardImg top width="10%" src="https://2.bp.blogspot.com/-5VW_PMw8kpo/WZCgw8zVX-I/AAAAAAAAFm8/Mgoi5Ieo6VEXfPTtyEU41S122jHMsEREwCLcBGAs/s1600/Top%2B10%2Bvideo%2Btutorials%2Bto%2Blearn%2BReact%2BJS.png" alt="ReactJS" />
              <CardBody>
                <CardText>
                  <div>
                    <ReactFitText>
                      <p>
                        Proficiency
                    </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c++"
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starCount={5}
                      value={4}
                    />
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>

          <div style={{ "height": "10%", "width": "38%" }}>
            <Card>
              <CardImg top width="10%" src="https://udemy-images.udemy.com/course/750x422/792484_cc98_3.jpg" alt="HTML/CSS" />
              <CardBody>
                <CardText>
                  <div >
                    <ReactFitText>
                      <p>
                        Proficiency
                    </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c"
                      editing={false}
                      renderStarIcon={() => <h6>★</h6>}
                      starCount={5}
                      value={3}
                    />
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div style={{ "height": "10%", "width": "38%" }}>
            <Card >
              <CardImg top width="100%" src="https://i.ytimg.com/vi/1Z3oJMHbg50/maxresdefault.jpg" alt="Ionic Framework" />
              <CardBody>
                <CardText>
                  <div>
                    <ReactFitText>
                      <p>Proficiency </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c"
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starCount={5}
                      value={4}
                    />

                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>

        </CardDeck>

        {/* BackEnd Technologies */}

        <h1 class="animated infinite jello">
          BackEnd Technologies
        </h1>

        <CardDeck>
          <div style={{ "height": "10%", "width": "38%" }}>
            <Card >
              <CardImg top width="100%" src="https://www.abeautifulsite.net/uploads/2016/04/nodejs.png?width=600&key=e29b3acd7da48dbe62199ba284591dc6e8abd8cb9ce286f5cf89b53a494a9b39" alt="NodeJS" />
              <CardBody>
                <CardText>
                  <div>
                    <ReactFitText>
                      <p>Proficiency </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c"
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starCount={5}
                      value={4}
                    />

                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>


          <div style={{ "height": "10%", "width": "38%" }}>
            <Card>
              <CardImg top width="10%" src="https://www.javatpoint.com/sqlite/images/what-is-sqlite1.png" alt="MySQL" />
              <CardBody>
                <CardText>
                  <div>
                    <ReactFitText>
                      <p>
                        Proficiency
                    </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c++"
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starCount={5}
                      value={4}
                    />
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>

          <div style={{ "height": "10%", "width": "38%" }}>
            <Card>
              <CardImg top width="10%" src="https://installvirtual.com/wp-content/uploads/2015/12/postgresql_1.png" alt="POstGre SQL" />
              <CardBody>
                <CardText>
                  <div >
                    <ReactFitText>
                      <p>
                        Proficiency
                    </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c"
                      editing={false}
                      renderStarIcon={() => <h6>★</h6>}
                      starCount={5}
                      value={3}
                    />
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>

        </CardDeck>

        {/* Tools Used*/}

        <h1 class="animated infinite jello">
          Tools Used
        </h1>

        <CardDeck>
          <div style={{ "height": "10%", "width": "38%" }}>
            <Card >
              <CardImg top width="100%" src="https://cdn-images-1.medium.com/max/1366/1*qwFrTMnFkcd3U9rFKwwacw.png" alt="Git + github" />
              <CardBody>
                <CardText>
                  <div>
                    <ReactFitText>
                      <p>Proficiency </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c"
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starCount={5}
                      value={4}
                    />

                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>


          <div style={{ "height": "10%", "width": "38%" }}>
            <Card>
              <CardImg top width="10%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoSA84tK6j3fsrBjFUb5o9keBttWjgOoswIp_pUECQnsnUNkCOg" alt="Command Promt" />
              <CardBody>
                <CardText>
                  <div>
                    <ReactFitText>
                      <p>
                        Proficiency
                    </p>
                    </ReactFitText>
                    <StarRatingComponent
                      name="rating c++"
                      editing={false}
                      renderStarIcon={() => <span>★</span>}
                      starCount={5}
                      value={4}
                    />
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>

        </CardDeck>


      </div>
    );
  }
}

export default Skills;
