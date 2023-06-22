import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Sheared/Header/Header';
import Fotter from '../Pages/Sheared/Fotter/Fotter';
import LeftSideNav from '../Pages/Sheared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Sheared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="3">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="5">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="4">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;