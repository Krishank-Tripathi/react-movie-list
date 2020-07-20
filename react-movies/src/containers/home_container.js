import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { isEmptyObj, queryStringToParams } from '../utils';
import { genresObjType, selectedOptionType } from '../types';
import {
  getLatestMovies, getNowplayingMovies,
  getUpcomingMovies, getGenres, searchMovie, selectDropdown
} from '../appRedux/action/home_action';
import Home from '../components/home';

export class HomeContainer extends PureComponent {
  static propTypes = {
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    }).isRequired,
    genres: genresObjType.isRequired,
    getMovies: PropTypes.func.isRequired,
    getLatestMovies: PropTypes.func.isRequired,
    getNowplayingMovies: PropTypes.func.isRequired,
    getUpcomingMovies: PropTypes.func.isRequired,
    getGenres: PropTypes.func.isRequired,
    selectDropdown: PropTypes.func.isRequired,
    selected: selectedOptionType.isRequired,
  }

  componentDidMount() {
    const {
      genres,
      getGenres,
      location,
      selected,
      getLatestMovies,
      getNowplayingMovies,
      getUpcomingMovies
    } = this.props;

    if (isEmptyObj(genres)) getGenres();

    const { sort_by, with_genres, page } = { // eslint-disable-line camelcase
      ...selected, ...queryStringToParams(location.search)
    };


    getLatestMovies({ sort_by, with_genres, page });
    getNowplayingMovies({ sort_by, with_genres, page });
    getUpcomingMovies({ sort_by, with_genres, page });
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state.HomeReducer
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getLatestMovies,
    getNowplayingMovies,
    getUpcomingMovies,
    getGenres,
    searchMovie,
    selectDropdown,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
