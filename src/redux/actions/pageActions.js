export const SET_PAGE_TITLE = "SET_PAGE";

export const setPageTitle = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};
