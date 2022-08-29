import { createAction } from "../createAction";

export const types = {
  ACTION_A: "user_ACTION_A",
};

export default {
  actionA: () => createAction(types.ACTION_A),
};
