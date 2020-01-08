import React, { useState } from 'react';
import AuthModal from './components/authModal/AuthModal.component';

const App = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState('login');
  const handleOpenModal = e => {
    setModal(e.target.name);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <button type="button" name="login" onClick={handleOpenModal}>
        Login
      </button>
      <button type="button" name="registration" onClick={handleOpenModal}>
        Join
      </button>
      <button
        type="button"
        name="registrationBusiness"
        onClick={handleOpenModal}
      >
        Join Business
      </button>
      <AuthModal
        handleClose={handleCloseModal}
        modal={modal}
        open={open}
        setModal={setModal}
      />
    </div>
  );
};

export default App;
