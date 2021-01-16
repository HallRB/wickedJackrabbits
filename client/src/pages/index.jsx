import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
import Placeholder from "../images/placeholder.png";
import axios from "axios";

const MainPage = () => {
  const [homeData, setHomeData] = useState({})
  useEffect(() => {
    axios.get("/api/getHomes" )
      .then((res) => {
        setHomeData(res.data.result)
        console.log("Home details =", res.data.result.Users)
        console.log("data:", res.data.result)
      })
  }, [])
  
  
  const agent = homeData;
  console.log("this is homedata", homeData.firstName)


  return (
    <div className="indexContainer">
      <Container>
        <Row>
        <div className="searchbar">
          <Col>
          <h3><div id="agentName">'div id="agentName"'</div></h3>
            <h3>{homeData.firstName}</h3>
            {/* also implement dynamic agents name here */}
          </Col>
          </div>

        </Row>
        <Row>
        <div className="searchbar">
          <Col>
            <input className="rounded" placeholder="Search Address"></input>
            <p></p>
          </Col>
          <Button type="button" className="btn addHome btn-primary" href="/addHome">Add home</Button>
          </div>
        </Row>
        <p></p>

        {homeData.Users && homeData.Users.length !== 0 && homeData.Users.map(item => {

            const homes = item.Homes
            const homesMap = homes.map(home=> {
              console.log("home id", home) 
              const id = home.id 
              return(
               
                <Col>
                  <NavLink to={`/createoffer/`}>
                    <div className="card">
                    <Card>
                      <div className="genImage">
                      <Image className="card-img-top" src={Placeholder} fluid />
                      {/* implement agent updated photos */}
                      </div>
                      <div className="genWrap">


                          <div className="genPart">
                            <p>
                              <div className="innerPart">
                                 Address 
                              </div>
                              <p></p>
                              <div className="innerGenPart">
                                  <p>{home.address}</p>
                              </div>
                            </p>
                          </div>

                          <div className="genPart">
                          <p>
                                  <div className="innerPart">
                            Listing Price
                            </div>
                             <p></p> 
                             <div className="innerGenPart">
                              <p>${home.listingPrice}</p>
                              </div>
                          </p>
                              </div>


                            <div className="genPart">
                            <p>
                                  <div className="innerPart">
                                Offers 
                                </div>
                                <p></p>
                                <div className="innerGenPart">
                                  <p>Generated Text</p>
                                  </div>
                              </p>
                            </div>

                              <div className="genPart">
                                  <p>
                                  <div className="innerPart">
                                  Homeowner 
                                  </div> 
                                  </p>
                                  <p></p>
                                  <div className="innerGenPart">
                                    <p>{item.firstName} {item.LastName}
                                  </p>
                                  </div>
                              </div>

                            </div>


                    </Card>
                    </div>
                    </NavLink>
                  </Col>
                
              
                  
            )})
            
                return (
                  <Row>
                    {homesMap}
                  </Row>
                )
            })};
      </Container>
    </div>
  );
};

export default MainPage;