import { PropsWithChildren } from 'react';

const OrderedList = ({ children }: PropsWithChildren) => {
  return <div className="custom-ordered-list">{children}</div>;
};

export default OrderedList;
