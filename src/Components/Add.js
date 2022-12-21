import { useState } from 'react'
import {
    Box,
    Button,
    TextField,
    DialogTitle
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Map from '../maps'
import '../App'

const AddLists = (props) => {
    console.log(props);

    const navigate = useNavigate();

    const [open, setOpen] = useState(true);
    

    const [lists, setLists] = useState({
        open: true,
        Name: '',
        Description: '',
        Hours: '',
        Address: '',
        id: props.lists.length + 1,
    });
    
        const handleTextChange = (e) => {
        
            const { name, value } = e.target;

            setLists((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });
        };

        const checkOpen = () => {
            return open === true ? navigate('/') : null;
          };

        const handleClose = () => {
            setOpen(false);
            checkOpen();
          };

        const handleSubmit = (e) => {
            e.preventDefault();
            const payload = {...lists};
            props.addListing(payload);
            handleClose();
        }



        return (
            <>
                <DialogTitle>Add New Listing</DialogTitle>
                <Box sx={{display: 'flex', marginLeft: '5px'}}>
                    <Box>
                    <TextField 
                    required
                    autoFocus
                    value={lists.Name}
                    name='Name'
                    label='Name' 
                    margin='normal'
                    id='name'
                    type='text'
                    fullWidth
                    variant='standard'
                    onChange={handleTextChange}
                    /> 
                    <TextField 
                    required
                    value={lists.Description}
                    margin="normal"
                    id="description"
                    label="Description" 
                    name="Description"
                    variant="standard"
                    type='text'
                    fullWidth
                    onChange={handleTextChange}
                    /> 
                    <TextField 
                    required
                    value={lists.Hours}
                    margin="normal"
                    id="hours"
                    label="Hours (ex. 8AM-9PM)" 
                    name="Hours"
                    variant="standard"
                    type='text'
                    fullWidth
                    onChange={handleTextChange}
                    /> 
                    <TextField 
                    required
                    value={lists.Address}
                    margin="normal"
                    id="address"
                    label="Address" 
                    name="Address"
                    variant="standard"
                    type='text'
                    fullWidth
                    onChange={handleTextChange}
                    />
                    </Box>
                    <Map />
                </Box>
                <Link to='/listings'>
                    <Button onClick={handleSubmit}>Save</Button>
                </Link>
                
            </>
    );
};

export default AddLists