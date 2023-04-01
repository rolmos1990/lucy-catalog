import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || Catalogos</title>
      <meta
        name="description"
        content="Web site for Lucy Modas"
      />
      <link rel="canonical" href="https://themeforest.net/user/ib-themes" />
      <meta property="og:title" content="A very important title" />
    </Helmet>
  );
};

export default Seo;
