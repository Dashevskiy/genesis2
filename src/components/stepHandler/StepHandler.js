import React, {useState} from 'react';
import './firstInterview.css';
import './to-begin.css';
import './secondInterview.css';
import male from '../../img/male.png';
import female from '../../img/female.png';
import Form from '../pages/form/form';

const StepHandler = () => {
  const STEP_CONFIG = {
    to_begin: 'to_begin',
    first_interview: 'first_interview',
    second_interview: 'second_interview',
    form: 'form'
  };

  const [currentStep, setCurrentStep] = useState(STEP_CONFIG.to_begin);

  const [disabledBtnFirstInterview, setDisabledBtnFirstInterview] = useState('');
  const [disabledBtnSecondInterview, setDisabledBtnSecondInterview] = useState('');

  const toBegin = <div className='container toBegin-container'>
    <div className='info-block'>
      <div>
        <h6 className='headline'>lorem ipsum</h6>
        <p className='toBegin-text'>Mauris vel nisi ac orci placerat semper. Aenean sapien massa.</p>
      </div>
      <div className='toBegin-btn-container'>
        <h5 className='toBegin-text-btn'>lorem ipsum?</h5>
        <button className='toBegin-btn btn' onClick={() => setCurrentStep(STEP_CONFIG.first_interview)}>Начать</button>
      </div>
    </div>
  </div>

  const first_interview = <div className='container firstInterview-container'>
    <div className='info-block'>
      <div>
        <h6 className='headline firstInterview-headline'>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Inte</h6>
      </div>

      <div className='firstInterview-form-container'>
        <div className='firstInterview-radiobutton-container'>
          <label className="custom-radio">
            <input type="radio" name="radio"/>
            <span className="radio-btn" onClick={() => setDisabledBtnFirstInterview('disabled')}>Вариант А</span>
          </label>

          <label className="custom-radio">
            <input type="radio" name="radio"/>
            <span className="radio-btn" onClick={() => setDisabledBtnFirstInterview('disabled')}> Вариант Б</span>
          </label>

          <label className="custom-radio">
            <input type="radio" name="radio"/>
            <span className="radio-btn" onClick={() => setDisabledBtnFirstInterview('disabled')}>Вариант В</span>
          </label>

        </div>
        <div className='firstInterview-btn-container'>
          <button
            className={`btn ${disabledBtnFirstInterview}`}
            onClick={() => setCurrentStep(STEP_CONFIG.second_interview)}>Продолжить
          </button>
        </div>
      </div>
    </div>

  </div>

  const secondInterview = <div className='container secondInterview-container'>
    <div className='info-block'>
      <div>
        <h6 className='headline secondInterview-headline'>Lorem ipsum</h6>
      </div>

      <div className='secondInterview-form-container'>
        <div className='secondInterview-radiobutton-container'>

          <label className="custom-radio">
            <input type="radio" name="radio"/>
            <span className="radio-btn" onClick={() => setDisabledBtnSecondInterview('disabled')}>
              <img alt='male' src={male}/>Вариант А
            </span>
          </label>

          <label className="custom-radio">
            <input type="radio" name="radio"/>
            <span className="radio-btn" onClick={() => setDisabledBtnSecondInterview('disabled')}>
              <img alt='female' src={female}/>
              Вариант Б</span>
          </label>

        </div>
        <div className='secondInterview-btn-container'>
          <button
            className={`btn ${disabledBtnSecondInterview}`}
            onClick={() => setCurrentStep(STEP_CONFIG.form)}>Продолжить
          </button>
        </div>
      </div>
    </div>

  </div>

  return (
    <>
      {currentStep === STEP_CONFIG.to_begin && toBegin}
      {currentStep === STEP_CONFIG.first_interview && first_interview}
      {currentStep === STEP_CONFIG.second_interview && secondInterview}
      {currentStep === STEP_CONFIG.form && <Form/>}
    </>
  )
}

export default StepHandler;