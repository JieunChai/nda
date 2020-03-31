import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/index';
import Header from 'components/Header/Header';
import { VisitorList } from 'components/Visitors/VisitorList';

interface Props {}

const VisitorListContainer : React.FC<Props> = () => {
  
  const dispatch = useDispatch();  
  const visitor = useSelector((state: RootState) => state.visitor);

  return(
    <>
      <Header />
      <VisitorList visitor={visitor}  />
    </>
  );

};

export { VisitorListContainer }; 