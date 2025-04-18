import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { type Document } from '@contentful/rich-text-types';

const RichText = ({ document }: { document: Document }) => {
  return <div className="rich-text">{documentToReactComponents(document)}</div>;
};

export default RichText;
