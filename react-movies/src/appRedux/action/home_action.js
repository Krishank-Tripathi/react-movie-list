import { CALL_API } from '../../middleware/api';
import * as actions from '../../constants/actionTypes';
import { updateUrlParams } from '../../utils';


export const getLatestMovies = (params) => ({
  [CALL_API]: {
    params,
    endpoint: '/movie/latest',
    method: 'GET',
    types: [
      actions.GET_LATEST_MOVIES_REQUEST,
      {
        type: actions.GET_LATEST_MOVIES_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(json => {
            return json;
          });
        }
      },
      actions.GET_LATEST_MOVIES_ERROR
    ]
  }
});

export const getNowplayingMovies = (params) => ({
  [CALL_API]: {
    params,
    endpoint: '/movie/now_playing',
    method: 'GET',
    types: [
      actions.GET_NOWPLAYING_MOVIES_REQUEST,
      {
        type: actions.GET_NOWPLAYING_MOVIES_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(json => {
            return json;
          });
        }
      },
      actions.GET_NOWPLAYING_MOVIES_ERROR
    ]
  }
});

export const getUpcomingMovies = (params) => ({
  [CALL_API]: {
    params,
    endpoint: '/movie/upcoming',
    method: 'GET',
    types: [
      actions.GET_UPCOMING_MOVIES_REQUEST,
      {
        type: actions.GET_UPCOMING_MOVIES_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(json => {
            return json;
          });
        }
      },
      actions.GET_UPCOMING_MOVIES_ERROR
    ]
  }
});


export const getGenres = () => ({
  [CALL_API]: {
    endpoint: '/genre/movie/list',
    method: 'GET',
    types: [
      actions.GET_GENRES_REQUEST,
      {
        type: actions.GET_GENRES_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(json => {
            return json;
          });
        }
      },
      actions.GET_GENRES_ERROR
    ]
  }
});

export const searchMovie = (params) => {
  return {
    [CALL_API]: {
      params,
      endpoint: '/search/movie',
      method: 'GET',
      types: [
        actions.SEARCH_MOVIE_REQUEST,
        {
          type: actions.SEARCH_MOVIE_SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => {
              return json;
            });
          }
        },
        actions.SEARCH_MOVIE_ERROR
      ]
    }
  };
};

export const selectDropdown = (selected = {}) => (dispatch) => {
  dispatch({
    type: actions.SELECT_DROPDOWN,
    payload: selected,
  });
  updateUrlParams(selected);
  dispatch(getLatestMovies(selected));
  dispatch(getNowplayingMovies(selected));
  dispatch(getUpcomingMovies(selected));
};
