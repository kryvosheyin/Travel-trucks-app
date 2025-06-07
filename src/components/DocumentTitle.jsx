import { Helmet } from 'react-helmet-async';

const DocumentTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default DocumentTitle;
