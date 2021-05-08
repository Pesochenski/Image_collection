import axios from "axios";
import { Dispatch } from "redux";
import {
  ImageAction,
  ImageActionTypes,
} from "../../interfaces/fetchInterfaces";

export function fetchImg() {
  return async (dispatch: Dispatch<ImageAction>): Promise<void> => {
    try {
      dispatch({ type: ImageActionTypes.FETCH_IMAGES });
      const res = await axios.get("http://localhost:5000/images");
      dispatch({
        type: ImageActionTypes.FETCH_IMAGES_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: ImageActionTypes.FETCH_IMAGES_ERROR });
    }
  };
}
