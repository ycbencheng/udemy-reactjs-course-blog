import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`);

    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };
};
