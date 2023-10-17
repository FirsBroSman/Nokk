import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './UI/NavBar';
import HomePage from './pages/HomePage';
import OnePicPage from './pages/OnePicPage';
import AddPage from './pages/AddPage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import useUser from './customHooks/useUser';
import MyPicPage from './pages/MyPicPage';

function App({
  user, allCards, allUserCards, oneCard,
}) {
  const {
    currentUser, signInHandler, signUpHandler, logoutHandler,
  } = useUser(user);

  return (
    <div className="container">
      <NavBar user={user} logoutHandler={logoutHandler} />
      <Routes>
        <Route path="/" element={<HomePage user={user} allCards={allCards} />} />
        <Route path="/auth/login" element={<SignInPage signInHandler={signInHandler} />} />
        <Route path="/auth/signup" element={<SignUpPage signUpHandler={signUpHandler} />} />
        <Route path="/route/:id" element={<OnePicPage user={user} oneCard={oneCard} />} />
        <Route path="/routs/add" element={<AddPage />} />
        <Route path="/routs/all" element={<MyPicPage user={user} allUserCards={allUserCards} />} />
      </Routes>
    </div>
  );
}

export default App;
