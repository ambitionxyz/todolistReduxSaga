// eslint-disable-next-line no-unused-vars
import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { patchRequest } from '../../saga/toDoList/toDoList.action';
// eslint-disable-next-line no-unused-vars
import { fetchRequest } from '../../saga/toDoList/toDoList.action';
import { useParams, useNavigate } from 'react-router-dom';

const JobDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const dataSource = useSelector(state => state.toDoListReducer);
  // eslint-disable-next-line no-unused-vars
  const { list, loading, isAddSuccess } = dataSource;
  const id = params.jobId;
  console.log(list);
  const currentVal = list.find(val => val.id === id);
  console.log(currentVal);
  const [valueChange, setValueChange] = useState(currentVal.job);
  //   useEffect(() => {
  //     if (isAddSuccess) {
  //       dispatch(fetchRequest());
  //     }
  //   }, [isAddSuccess]);

  //   console.log(currentVal);
  //   console.log(index);
  //   console.log(loading);
  const onChange = e => {
    setValueChange(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log('AAAAAAAAA', valueChange);
    dispatch(patchRequest({ job: valueChange, id: currentVal.id }));

    setValueChange('');
    setTimeout(() => {
      navigate('/all-list', { push: true });
    }, 3000);
  };
  return (
    <Fragment>
      <div>
        <p>{currentVal.job}</p>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input value={valueChange} onChange={onChange}></input>
          <button type="submit" onSubmit={onSubmit}>
            Xác nhận
          </button>
        </form>
      </div>
      {/* {!loading && <p>loading...</p>}
      {loading && <p>loading xong</p>} */}
    </Fragment>
  );
};

export default JobDetail;
