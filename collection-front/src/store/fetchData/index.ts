import axios from "axios";
import { Dispatch } from "redux";
import {
  Elem,
  ImageAction,
  ImageActionTypes,
} from "../../interfaces/fetchInterfaces";

interface Returned {
  images: Array<Elem>;
}

export function fetchImg() {
  return async (
    dispatch: Dispatch<ImageAction>
  ): Promise<Returned | undefined> => {
    try {
      dispatch({ type: ImageActionTypes.FETCH_IMAGES });
      const res = await axios.get("http://localhost:5000/images");
      dispatch({
        type: ImageActionTypes.FETCH_IMAGES_SUCCESS,
        payload: res.data.sort((a: any, b: any) => a.id - b.id),
      });
      return {
        images: res.data as Array<Elem>,
      };
    } catch (err) {
      dispatch({ type: ImageActionTypes.FETCH_IMAGES_ERROR });
    }
  };
}
