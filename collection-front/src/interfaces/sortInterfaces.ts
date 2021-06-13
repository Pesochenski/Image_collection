import { Elem } from "./fetchInterfaces";

export enum ImageSortActionTypes {
  SORTED_IMAGES = "SORTED_IMAGES",
  SORTED_IMAGES_SUCCESS = "SORTED_IMAGES_SUCCESS",
}

export interface SortImageState {
  sortedImages: Array<Elem>;
  sorted: boolean;
}

interface SortImageAction {
  type: ImageSortActionTypes.SORTED_IMAGES;
}
interface SortImageActionSuccess {
  type: ImageSortActionTypes.SORTED_IMAGES_SUCCESS;
  payload: Array<Elem>;
}

export type SortAction = SortImageAction | SortImageActionSuccess;
