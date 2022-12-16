import React from 'react'
import { useParams } from 'react-router-dom';
import { Container} from '@mui/material';
import Map from '../maps'

const About = (props) => {
    let { id } = useParams();
    console.log(id);
    const list = props.lists.find(list => list.id === +id)

    return (
        <Container maxWidth="sm" className="list-container">
                <h1>{list.Name}</h1>
                <h2>{list.Address}</h2>
                <h2>{list.Hours}</h2>
                <p>{list.Description}</p>
                <Map />
        </Container>
    )
}

export default About