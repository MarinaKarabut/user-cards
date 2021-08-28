import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Input from '../../shared/components/FormInput';
import Button from '../../shared/components/Button';
import { fields } from './fields';
import { initialState } from './initialState';
import useForm from '../../shared/hooks/useForm';
import { logIn, register } from '../../redux/auth/auth-operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const errorCode = useSelector(state => state.auth.error, shallowEqual);

  const [actionType, setActionType] = useState('');
  const dispatch = useDispatch();

  const onSubmit = data => {
    const action = actionType === 'login' ? logIn(data) : register(data);
    dispatch(action);
  };

  const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });
    useEffect(() => {
        if (errorCode) {
            const errorMessage = (errorCode.response.status === 409) ? 'You are already registered' : 'Incorrect email or password'
            toast.error(
            errorMessage,
            { position: toast.POSITION.TOP_RIGHT },
          );
        }
    }, [errorCode])

  return (
    <>
      <div className={styles.authFormContainer}>
        <div className={styles.formGroup}>
          <form onSubmit={handleSubmit}>
            <Input {...fields.email} value={data.email} onChange={handleChange} />
            <Input {...fields.password} value={data.password} onChange={handleChange}/>
            <div className={styles.buttonContainer}>
              <Button className={styles.button} type="submit" onClick={() => setActionType('login')}>Sign in</Button>
              <Button className={styles.button} type="submit" onClick={() => setActionType('register')}>Sign up</Button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
 </>
  );
};

export default AuthForm;
