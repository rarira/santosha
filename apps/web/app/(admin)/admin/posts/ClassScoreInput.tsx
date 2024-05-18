import { Grid } from '@mui/material';
import { Labeled, NumberInput } from 'react-admin';

const scores = {
  criteria: [
    { display: '유산소', Key: 'aerobic' },
    { display: '근력', key: 'strength' },
    { display: '지구력', key: 'endurance' },
    { display: '유연성', key: 'flexibility' },
  ],
  maxScore: 3,
};

function ClassScoreInput() {
  return (
    <Labeled label="Class Scores">
      <Grid container spacing={2}>
        {scores.criteria.map(({ display, key }, index) => {
          return (
            <Grid key={`${index}_${key}`} item xs={5}>
              <NumberInput
                source={`${key}`}
                label={`${display} 점수`}
                defaultValue={1}
                min={0}
                max={scores.maxScore}
                helperText="0~3점까지 입력하세요"
              />
            </Grid>
          );
        })}
      </Grid>
    </Labeled>
  );
}

export default ClassScoreInput;
