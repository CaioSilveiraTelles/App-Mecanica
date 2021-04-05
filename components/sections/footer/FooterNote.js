import React from 'react';
import style from 'styled-components';

import Container from '../../layout/Container';
import Content from '../../layout/Content';

const FooterNoteText = style.small`
    display: inline-block;
    padding: 1rem 0;
`

const FooterNote = () => {
    return (
        <Container variant="secondary">
            <Content>
                <FooterNoteText>Copyright &copy; 2021 Ice Car Serviços Automotivos LTDA | Todos os direitos reservados | Site desenvolvido por Caio Silveira Telles</FooterNoteText>
            </Content>
        </Container>
    );
};

export default FooterNote;