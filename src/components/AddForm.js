import {useContext} from 'react';
import {UserContext} from '../context/app.context'
import Button from '@mui/material/Button';
import {Box} from '@mui/material'
import {TextField} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container'
import { CssBaseline } from '@mui/material';
import { Typography } from '@mui/material';

const theme = createTheme();


function AddForm(props){

	// const {name} = useContext(UserContext)

	const {btnSubmit} = props
	return (
		<ThemeProvider theme={theme}>
		 	<Container component="main" maxWidth="xs">
			  <CssBaseline />
			  <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
		<Typography component="h1" variant="h5">
            Add Item
          </Typography>
				<Box component="form" onSubmit={btnSubmit} noValidate sx={{ mt: 1 }}>
					<TextField fullWidth label="name" id="fullWidth" name="name"  type="text" placeholder="Enter name" />	
						<TextField fullWidth label="description" id="fullWidth" name="description" type="text" placeholder="Enter desc"/>
							<TextField fullWidth label="" id="fullWidth" type="file"  name="myImage"  accept="image/png, image/jpg"/>
  								<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >Submit</Button>

				</Box>
				</Box>
			</Container>
		</ThemeProvider>
		
	)
}

export default AddForm