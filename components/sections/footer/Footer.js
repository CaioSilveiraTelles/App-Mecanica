import React from 'react';
import style from 'styled-components';

import Container from '../../layout/Container';
import Content from '../../layout/Content';
import Section from '../../layout/Section';
import Map from './Map';
import { device } from '../../helpers/queries';

const FooterContent = style.div`
    display: flex;

    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const ContactContainer = style.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    flex-wrap: wrap;
`

const ContactItem = style.div`
    margin-bottom: 1rem;
    width: 100%;

    p {
        margin: 0.7rem 0;
    }

    @media ${device.tablet} {
        max-width: 50%;
    }
`

const Footer = () => {
    return (
        <Container id="contato" variant="tertiary" >
            <Content>
                <Section>
                    <FooterContent>

                        <ContactContainer>
                            <ContactItem>
                                <h3>Contato</h3>
                                <p>(14) 3413-4007</p>                             
                                <p>xxxxxxxx@hotmail.com</p>
                            </ContactItem>

                            <ContactItem>
                                <h3>Endereço</h3>
                                <p>R. Cel. Galdino de Almeida</p>
                                <p>Bairro: Centro</p>
                                <p>CEP:17500-100</p>
                                <p> Marília - SP, Brasil</p>
                            </ContactItem>
                        </ContactContainer>

                        <Map />
                    </FooterContent>
                </Section>
            </Content>
        </ Container>
    );
};

export default Footer;