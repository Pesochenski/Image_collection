import { Dispatch } from "redux";
import { Elem } from "../../interfaces/fetchInterfaces";
import {
  ImageSortActionTypes,
  SortAction,
} from "../../interfaces/sortInterfaces";

export function sortImg(images: Array<Elem>) {
  return async (dispatch: Dispatch<SortAction>): Promise<void> => {
    dispatch({ type: ImageSortActionTypes.SORTED_IMAGES });
    const forSort = JSON.parse(JSON.stringify(images));
    const sortedImages = forSort
      .map((item: Elem) => ({
        id: item.id,
        link: item.link,
        title: item.title,
        date: new Date(item.date),
      }))
      .sort((a: any, b: any) => b.date - a.date);
    dispatch({
      type: ImageSortActionTypes.SORTED_IMAGES_SUCCESS,
      payload: sortedImages,
    });
  };
}
