import { Grid } from '@mui/material';
import { Labeled, NumberInput } from 'react-admin';

import { Class_Score_Criteria, Class_Score_Max_Score } from '@/libs/admin/constant';

function ClassScoreInput(): React.JSX.Element {
  return (
    <Labeled label="Class Scores">
      <Grid container spacing={2}>
        {Class_Score_Criteria.map(({ display, key }, index) => {
          return (
            <Grid key={`${index}_${key}`} item xs={5}>
              <NumberInput
                source={`extra_info.${key}`}
                label={`${display} 점수`}
                defaultValue={1}
                min={0}
                max={Class_Score_Max_Score}
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
