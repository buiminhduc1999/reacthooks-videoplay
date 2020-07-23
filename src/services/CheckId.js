import React, { useState, useEffect } from 'react';
import { listIdVideo } from '../utils/ListId';
import { Redirect } from 'react-router-dom'

const CheckId = props => {
    let count = 0;
    listIdVideo.forEach(element => {
        if (props.match.params.activeVideo === element) {
            count++;
            console.log(props.match.params.activeVideo)
            console.log(element)
        }
    });
    return count;
}
export default CheckId;