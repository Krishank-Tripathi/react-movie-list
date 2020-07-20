import React from 'react';

import { ReactComponent as loading } from '../../../assets/images/loading.svg';
import './styles.scss';

const Loading = () => (
  <div className="flex">
    <img src={loading} alt="loading..." className="loading" />
  </div>
);

export default Loading;
