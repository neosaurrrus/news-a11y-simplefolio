import React from 'react';
import { Helmet } from 'react-helmet';
// eslint-disable-next-line import/no-unresolved
import Bbc from '../components/Bbc';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'The Guardian'}</title>
        <html lang={lang || 'en'} />
        <meta
          name="description"
          content={description || 'A study into news site accessibility at the Guardian'}
        />
      </Helmet>
      <Bbc />
    </>
  );
};
