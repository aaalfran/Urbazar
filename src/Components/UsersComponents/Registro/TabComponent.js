import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import {FormGroup} from 'reactstrap';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
    
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function TabComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [genre, setGenre] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleGenero = (event) => {
    setGenre(event.target.value);
  };


  return (
    <div className={classes.root}>
      <AppBar className="navTap" position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
        >
          <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(0)} />
          <Tab icon={<PhoneIcon />} aria-label="phone" {...a11yProps(1)} />
          <Tab icon={<ShoppingBasket />} aria-label="shopping" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <form >
        <TabPanel value={value} index={0}>
            <FormGroup>
                <TextField className="col-md-5" id="standard-basic" label="Nombres" />
                <TextField className="col-md-5" id="standard-basic" label="Apellidos" />
            </FormGroup>
            <FormControl className="col-md-5" >
                    <InputLabel id="genero">Género</InputLabel>
                        <Select
                            id="genero"
                            value={genre}
                            onChange={handleGenero}
                            >
                            <MenuItem value="M">Masculino</MenuItem>
                            <MenuItem value="F">Femenino</MenuItem>
                            <MenuItem value="O">Otro</MenuItem>
                        </Select>
            </FormControl>
            <FormControl className="col-md-5">
                    <TextField
                        id="fecha_nacimiento"
                        label="Fecha de nacimiento"
                        type="date"
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
            </FormControl>

            <FormGroup>
                <TextField className="col-md-5" id="standard-basic" label="Identificación" />
            </FormGroup>


        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
      
      </form>
    </div>
  );
}