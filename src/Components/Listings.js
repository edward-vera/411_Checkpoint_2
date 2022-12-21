import React from 'react'
import '../App.css'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import { 
    Link,
    useParams 
} from 'react-router-dom'

const Listings = (props) => { 
    return (
        <div className="main-listings">
                <Container>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Hours</TableCell>
                                        <TableCell>Address</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {props.lists.map((lists,idx) => {
                                        return( <TableRow key={lists.id}>
                                            <TableCell  scope="row">
                                                <Typography>
                                                <Link
                                                    to={`/about/${lists.id}`}
                                                    component="button"
                                                    variant="header1"
                                                    style={{ color: 'black', borderBottom: '1px solid black'}}>
                                                    {lists["Name"]}
                                                </Link>
                                                </Typography>
                                            </TableCell>
                                            <TableCell  scope="row">{lists["Description"]}</TableCell>
                                            <TableCell  scope="row">{lists["Hours"]}</TableCell>
                                            <TableCell  scope="row">{lists["Address"]}</TableCell>
                                        </TableRow>
                                    )})}
                                </TableBody>
                            </Table>
                </Container>
        </div>
    );
};

export default Listings;