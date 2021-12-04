import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <Grid container className="header">
            <Grid xs={2} className="headerLinkContainer">
                <NavLink to="/" className="headerLink">
                    <Typography variant="h5" className="headerLink_typography">Home</Typography>
                </NavLink>
            </Grid>
            <Grid xs={2} className="headerLinkContainer">
                <NavLink to="/" className="headerLink">
                    <Typography variant="h5" className="headerLink_typography">All</Typography>
                </NavLink>
            </Grid>
            <Grid xs={2} className="headerLinkContainer">
                <NavLink to="/" className="headerLink">
                    <Typography variant="h5" className="headerLink_typography">One</Typography>
                </NavLink>
            </Grid>
            <Grid xs={2} className="headerLinkContainer">
                <NavLink to="/" className="headerLink">
                    <Typography variant="h5" className="headerLink_typography">Create</Typography>
                </NavLink>
            </Grid>
            <Grid xs={2} className="headerLinkContainer">
                <NavLink to="/" className="headerLink">
                    <Typography variant="h5" className="headerLink_typography">Update</Typography>
                </NavLink>
            </Grid>
            <Grid xs={2} className="headerLinkContainer">
                <NavLink to="/" className="headerLink">
                    <Typography variant="h5" className="headerLink_typography">Delete</Typography>
                </NavLink>
            </Grid>
        </Grid>
    )
}
