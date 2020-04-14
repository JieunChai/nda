import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/Header/Header';
import VisitorList from 'components/Visitors/VisitorList';
import { RootState } from 'reducers';
import { VisitorActions } from 'actions';

interface Props {}

const VisitorListContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  const visitors = useSelector((state: RootState) => state.visitor);

  useEffect(() => {
    dispatch(VisitorActions.getVisitor());
  }, [visitors]);

  const visitorsInfo = visitors;
  console.log(visitorsInfo);

  // const onClickToCard = (id: number) => dispatch();

  return(
    <>
      <Header />
      <VisitorList visitorsInfo={visitorsInfo}/>
    </>
  );

};

export { VisitorListContainer };