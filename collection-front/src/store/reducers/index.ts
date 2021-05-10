import { combineReducers } from "redux";
import { imageReducer } from "./imageReducer";
import { sortReducer } from "./sortReducer";

export const rootReducer = combineReducers({
  images: imageReducer,
  sortedImages: sortReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
