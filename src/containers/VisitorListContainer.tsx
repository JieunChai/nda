import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import { RootState } from '../modules/index';
import Header from 'components/Header/Header';
import { VisitorList } from 'components/Visitors/VisitorList';
import VisitorEach from 'components/Visitors/VisitorEach';

interface Props {}

const VisitorListContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  
  const visitor = useSelector((state: RootState) => state.visitor);
  const visitorsInfo = visitor.visitors;
  console.log(visitor);
  console.log(visitorsInfo);

  // const onClickToCard = (e: any, id: number) => {
    
  // }

  const visitorList = (visitorsInfo && visitorsInfo.map(each => each ? (
    <VisitorEach
      key={each.id}
      name={each.name}
      crewName={each.crewName}
      purpose={each.purpose}
      image={each.image}
    />
  ) : null));

  console.log("listcontainer");

  return(
    <>
      <Header />
      {visitorList}
    </>
  );

};

export { VisitorListContainer }; 