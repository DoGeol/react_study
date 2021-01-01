import React, {useState} from 'react';
import {Button, Jumbotron, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail';
import {Link, Route, Switch} from 'react-router-dom';
import Axios from 'axios';

function App() {
    let [shoes, setShoes] = useState(Data);
    let [stock, setStock] = useState([10, 12, 33]);
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <Jumbotron className="background">
                        <h1>20% Season OFF</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                    <div className="container">
                        <div className="row">
                            {
                                shoes.map((shoe) => {
                                    return (
                                        <Card shoe={shoe} key={shoe.id}/>
                                    )
                                })
                            }
                        </div>
                        <button className="btn btn-primary" onClick={() => {
                            Axios.get('https://codingapple1.github.io/shop/data2.json')
                                .then((res) => {
                                    console.log('성공 ::: ', res);
                                    let shoesArr = [...shoes, ...res.data];
                                    setShoes(shoesArr);
                                })
                                .catch((res) => {
                                    console.log('실패');
                                });
                        }}>더보기
                        </button>
                    </div>
                </Route>
                <Route path="/detail/:id">
                    <Detail shoes={shoes} stock={stock} setStock={setStock}/>
                </Route>
                <Route path="/:id">
                    <div>아무거나 적었을때 보여주세요.</div>
                </Route>
            </Switch>
        </div>
    );
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoe.id + 1) + '.jpg'}
                 width="100%"
                 alt={'img' + props.shoe.id}/>
            <h4>{props.shoe.title}</h4>
            <p>{props.shoe.content} & {props.shoe.price}</p>
        </div>
    )
}

export default App;
