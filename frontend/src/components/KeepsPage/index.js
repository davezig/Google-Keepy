import Keeps from '../Keeps';
import NewKeep from '../NewKeep';
import './KeepsPage.css';
import { getKeepsThunk } from '../../store/keeps';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function KeepsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getKeepsThunk());
  }, []);
  return (
    <>
      <NewKeep />
      <Keeps />
    </>
  );
}

export default KeepsPage;
