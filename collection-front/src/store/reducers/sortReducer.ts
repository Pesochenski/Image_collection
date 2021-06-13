import {
  SortImageState,
  SortAction,
  ImageSortActionTypes,
} from "../../interfaces/sortInterfaces";

const initialSortImageState: SortImageState = {
  sortedImages: [],
  sorted: false,
};

export function sortReducer(
  state = initialSortImageState,
  action: SortAction
): SortImageState {
  switch (action.type) {
    case ImageSortActionTypes.SORTED_IMAGES:
      return { sortedImages: [], sorted: !state.sorted };
    case ImageSortActionTypes.SORTED_IMAGES_SUCCESS:
      return { sortedImages: action.payload, sorted: true };
    default:
      return state;
  }
}
