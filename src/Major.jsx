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
        <InputLabel htmlFor="outlined-major-native-simple">Major</InputLabel>
        <Select
          native
          value={state.major}
          onChange={handleChange}
          label="Major"
          inputProps={{
            name: 'major',
            id: 'outlined-major-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="신학과">신학과</option>
          <option value="기독교교육·상담학과">기독교교육·상담학과</option>
          <option value="미디어영상광고학과">미디어영상광고학과</option>
          <option value="경영학과">경영학과</option>
          <option value="경찰행정학과">경찰행정학과</option>
          <option value="국제관광학과">국제관광학과</option>
          <option value="영어학과">영어학과</option>
          <option value="중국어학과">중국어학과</option>
          <option value="컴퓨터공학과">컴퓨터공학과</option>
          <option value="ICT융합학과">ICT융합학과</option>
          <option value="산업보안학과">산업보안학과</option>
          <option value="간호학과">간호학과</option>
          <option value="사회복지학과">사회복지학과</option>
          <option value="음악학과(피아노)">음악학과(피아노)</option>
          <option value="음악학과(성악)">음악학과(성악)</option>
          <option value="음악학과(현악)">음악학과(현악)</option>
          <option value="음악학과(관악)">음악학과(관악)</option>
          <option value="음악학과(작·편곡)">음악학과(작·편곡)</option>
          <option value="공연예술학과">공연예술학과</option>
          <option value="시각정보디자인학과">시각정보디자인학과</option>
          <option value="실내건축디자인학과">실내건축디자인학과</option>
          <option value="섬유패션디자인학과">섬유패션디자인학과</option>
        </Select>
      </FormControl>
    </div>
  );
}