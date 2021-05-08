import {
  ImageAction,
  ImageState,
  ImageActionTypes,
} from "../../interfaces/fetchInterfaces";

const initialState: ImageState = {
  images: [],
  loaded: false,
  error: false,
};

export function imageReducer(
  state = initialState,
  action: ImageAction
): ImageState {
  switch (action.type) {
    case ImageActionTypes.FETCH_IMAGES:
      return { images: [], loaded: true, error: false };
    case ImageActionTypes.FETCH_IMAGES_SUCCESS:
      return { images: action.payload, loaded: true, error: false };
    case ImageActionTypes.FETCH_IMAGES_ERROR:
      return { images: [], loaded: true, error: true };
    default:
      return state;
  }
}
