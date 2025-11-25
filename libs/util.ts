import merge from "lodash/merge";

import { Class_Score_Criteria } from "./admin/constant";

const getClassScoreCriteriaName = (classScoreCriteria: string) => {
  return Class_Score_Criteria.find(
    (criteria) => criteria.key === classScoreCriteria,
  )?.display;
};

const U = {
  getEnv: ((env: Record<string, any>) => {
    return function (key?: string) {
      if (!key) return env;
      return env[key];
    };
  })({
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  }),
  merge,
  getClassScoreCriteriaName,
  isServer: typeof window === "undefined",
};

export default U;
