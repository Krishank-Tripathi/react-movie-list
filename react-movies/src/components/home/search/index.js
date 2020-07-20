import React from 'react';
import PropTypes from 'prop-types';
import {
  pure,
  compose,
  withState,
  withHandlers,
} from 'recompose';


import FontIcon from '../../../components/common/font-icon';
import './styles.scss';

export const Search = ({
  onInput, onSearch
}) => {
  return (
    <div className="browse">
      <div className="top-nav page-title flex">
        <div className="search-bar">
          <button type="button" onClick={onSearch}>
            <FontIcon iconName="icon-search" />
          </button>
          <input
            className="search-input"
            type="text"
            placeholder="Search for movies"
            onChange={onInput}
          />
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  onInput: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default compose(
  withState('keyword', 'updateKeyword', false),
  withHandlers({
    onInput: ({ updateKeyword }) => (e) => updateKeyword(e.target.value),
    onSearch: ({ searchMovie, keyword }) => () => searchMovie({ query: keyword }),
  }),
  pure
)(Search);
