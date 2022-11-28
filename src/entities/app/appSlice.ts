import { createSlice } from "@reduxjs/toolkit";

interface State {
  loading: boolean;
  rulse: StateType;
}
type StateType = "loading" | "true";

const initialState: State = {
  loading: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading(state: State) {
      console.log("tut");
    },
  },
});
