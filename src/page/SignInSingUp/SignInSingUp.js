import React from 'react';
import { Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faUsers, faComments} from "@fortawesome/free-solid-svg-icons";
import LogoTwittor from "../../assets/png/logo.png"
import LogoWhiteTwittor from "../../assets/png/logo-white.png";

import "./SignInSingUp.scss";

export default function SignInSingUp() {
    return (
        <Container className='signin-signup' fluid>
            <Row>
                <LeftComponent />
                <RightComponent />
            </Row>
        </Container>
    )
}

function LeftComponent(){
    return (
        <Col  className='signin-signup__left' xs={6}>
            <img src={LogoTwittor} alt="Twittor" />
            <div>
                <h2>
                    <FontAwesomeIcon icon={faSearchPlus} />
                      Sigue lo que te interesa.
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faUsers} />
                    Entérate de que está hablando la gente.
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faComments} />
                     Únete a la conversación.
                </h2>
            </div>
        </Col>
    )
}

function RightComponent(){
    return (
        <Col  className='signin-signup__right' xs={6}>
            <div>
                <img src={LogoWhiteTwittor} alt="Twittor" />
                <h2>Mira lo que esta pasando en el mundo en este momento</h2>
                <h3>Únete a Twittor hoy mismo.</h3>
                <Button variant='primary'>Regístrate</Button>
                <Button variant='outline-primary'>
                    Iniciar sesión
                </Button>
            </div>
            
        </Col>
    )
}