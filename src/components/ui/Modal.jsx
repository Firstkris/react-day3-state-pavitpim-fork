import React from 'react';

function Modal(props) {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <>
      {isShow && (
        <div className='modal' onClick={() => setIsShow(false)}>
          <div className='modal__content'>
            {props.children}
            <button className='modal__btn' onClick={() => setIsShow(false)}>
              click to close
            </button>
          </div>
        </div>
      )}
      <button onClick={() => setIsShow(true)}>Click to Open</button>
    </>
  );
}

export default Modal;
