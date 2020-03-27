import React from 'react';
import VisitorCard from 'components/Visitors/VisitorCard';
import { useDispatch, useSelector } from 'react-redux';
import { reducer } from 'modules/visitor';
import { RootState } from '../modules';

interface Props { }

const VisitorContainer: React.FC<Props> = () => {

  const dispatch = useDispatch();
  const visitorInfo = useSelector((state: RootState) => state.visitor)

  return <VisitorCard
    id={visitorInfo.id} 
    name={visitorInfo.name}
    email={visitorInfo.email} 
    phone={visitorInfo.phone} 
    purpose={visitorInfo.purpose} 
    crewName={visitorInfo.crewName} 
    image={visitorInfo.image} 
    datetime={visitorInfo.datetime} 
    signature={visitorInfo.signature}
    />
}

export { VisitorContainer };
