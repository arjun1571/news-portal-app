import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub , FaWhatsapp, FaTwitter,FaTwitch } from 'react-icons/fa';
const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup  vertical>
                <Button className='mb-2' variant="outline-primary">Login with Google</Button>
                <Button variant="outline-dark">Login with GitHub</Button>
            </ButtonGroup>
            <h4 className='mb-3 mt-3'>Find On Us</h4>
            <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaGithub></FaGithub> GitHub</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default RightSideNav;