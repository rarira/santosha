import merge from 'lodash/merge';

import { Class_Score_Criteria } from './admin/constant';

const getClassScoreCriteriaName = (classScoreCriteria: string) => {
  return Class_Score_Criteria.find(criteria => criteria.key === classScoreCriteria)?.display;
};

export default {
  getEnv: ((env: Record<string, any>) => {
    return function (key?: string) {
      if (!key) return env;
      return env[key];
    };
  })({
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }),
  merge,
  getClassScoreCriteriaName,
};
