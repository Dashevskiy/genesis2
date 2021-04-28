import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import './form.css';
import male from '../../../img/male.png';
import female from '../../../img/female.png';

const Form = () => {
  const [privacy, setPrivacy] = useState(false);
  const onClickPrivacy = () => setPrivacy(!privacy);

  const validationsSchema = yup.object().shape({
    name: yup.string().typeError('Должно быть строкой').required('Введите своё имя'),
    email: yup.string().email('Введите верный email').required('Неверный формат email'),
    password: yup.string().typeError('Должно быть строкой').required('Придумайте новый пароль')
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: ''
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={validationsSchema}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty
        }) => (
        <div className='container form-container'>
          <div className='info-block'>
            <div>
              <h6 className='headline form-headline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod</h6>
            </div>

            <div className='form'>

              <label htmlFor='radio'>Я ищу:</label>
              <div className='form-radioButton'>

                <label className="custom-radio">
                  <input type="radio" name="radio"/>
                  <span className="radio-btn"><img alt='male' src={male}/>Вариант 1</span>
                </label>

                <label className="custom-radio">
                  <input type="radio" name="radio"/>
                  <span className="radio-btn"><img alt='female' src={female}/>Вариант 2</span>
                </label>

              </div>
            </div>

            <p className='form-field'>
              <label htmlFor='name'>Ваше имя:</label>
              <input
                className={`form-input`}
                type='text'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </p>
            {touched.name && errors.name && <p className='error'>{errors.name}</p>}

            <p className='form-field'>
              <label htmlFor='email'>Email:</label>
              <input
                className={`form-input`}
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && <p className='error'>{errors.email}</p>}

            <p className='form-field'>
              <label htmlFor='password'>Придумайте пароль:</label>
              <input
                className={`form-input`}
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && <p className='error'>{errors.password}</p>}

            <div className='privacy-policy'>
              <input type="checkbox" value="None" id="privacy-policy" name="check" onClick={onClickPrivacy}/>
              <label htmlFor="privacy-policy"></label>
              <span>Регистрируясь, вы подтверждаете, что вам уже исполнилось  18 лет и вы ознакомились с условиями
                пользования сайтом.</span>
            </div>

            <div className='form-btn-container'>
              <button
                className={`${!isValid || !dirty || !privacy ? 'disabled' : 'btn form-btn'}`}
                disabled={!isValid || !dirty || !privacy}
                onClick={handleSubmit}
                type='submit'
              >Продолжить
              </button>
            </div>

          </div>
        </div>
      )}
    </Formik>

  );
}

export default Form;