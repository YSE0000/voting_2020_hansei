import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-position-native-simple">Position</InputLabel>
        <Select
          native
          value={state.position}
          onChange={handleChange}
          label="Position"
          inputProps={{
            name: 'position',
            id: 'outlined-position-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="학회장">학회장</option>
          <option value="부학회장">부학회장</option>
        </Select>
      </FormControl>
    </div>
  );
}