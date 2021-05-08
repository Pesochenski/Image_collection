export enum ImageActionTypes {
  FETCH_IMAGES = "FETCH_IMAGES",
  FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS",
  FETCH_IMAGES_ERROR = "FETCH_IMAGES_ERROR",
}

export interface Elem {
  id: string;
  link: string;
  title: string;
  date: string;
}

export interface ImageState {
  images: Array<Elem>;
  loaded: boolean;
  error: boolean;
}

interface FetchImageAction {
  type: ImageActionTypes.FETCH_IMAGES;
}
interface FetchImageActionSuccess {
  type: ImageActionTypes.FETCH_IMAGES_SUCCESS;
  payload: Array<Elem>;
}
interface FetchImageActionError {
  type: ImageActionTypes.FETCH_IMAGES_ERROR;
}

export type ImageAction =
  | FetchImageAction
  | FetchImageActionSuccess
  | FetchImageActionError;
