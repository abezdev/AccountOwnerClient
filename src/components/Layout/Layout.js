import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Navigations from '../Navigation/Navigation';

const layout = (props) => {
    return (
        <Grid>
            <Row>
                <Navigations/>
            </Row>
            <main>
                {props.children}
            </main>
        </Grid>
    )
    
}
export default layout;
