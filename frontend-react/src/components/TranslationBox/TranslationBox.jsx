import { Paper, Typography, Grid } from '@mui/material';
import React from 'react';

class TranslationBox extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {

        if (!this.props.innerText) {
            return null;
        }

        return (
            <Paper variant='outlined' style={{position: 'fixed', top: 100, left: 10, zIndex: 3, padding: 15, maxWidth: '30%'}}>
                <b>Translation:</b> {this.props.innerText}
            </Paper>
        );
    }
}

export default TranslationBox;