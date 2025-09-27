import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { AuthProvider } from './components/Auth/AuthProvider';
import { RequireAuth } from './components/Auth/RequireAuth';
import RootLayout from './layouts/RootLayout';
import UserLayout from './layouts/UserLayout';
import RangListPage from './components/user/rank list/RangListPage';
import QuizzesPage from './components/user/quizzes page/QuizzesPage';
import QuizPage from './components/user/QuizPage';
import QuizDetailsView from './components/user/QuizDetalisView';
import FinishQuizPage from './components/user/FinishQuizPage';
import ProfilePage from './components/user/ProfilePage';
import AdminPage from './components/admin/admin panel/AdminPage';
import AddQuizPage from './components/admin/add quiz/AddQuizPage';
import AdminLayout from './layouts/AdminLayout';
import { RequireRole } from './components/Auth/RequireRole';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route element={<RootLayout />}> */}
          {/* <Route path="/app" element={<UserLayout />} > */}
          <Route element={<RequireAuth><RootLayout /></RequireAuth>}>
            <Route path="/app" element={<RequireRole only='user'><UserLayout /></RequireRole>} >
              <Route index element={<QuizzesPage />} />
              <Route path='rank-list' element={<RangListPage />} />
              <Route path='quizzes' element={<QuizzesPage />} />
              <Route path='quiz/:id' element={<QuizPage />} />
              <Route path='quiz/finish/:id' element={<FinishQuizPage />} />
              <Route path='profile' element={<ProfilePage />} />
            </Route>
          </Route>

          {/* <Route element={<RootLayout />}> */}
          {/* <Route path="/admin" element={<AdminLayout />} > */}
          <Route element={<RequireAuth><RootLayout /></RequireAuth>}>
            <Route path="/admin" element={<RequireRole only='admin'><AdminLayout /></RequireRole>} >
              <Route path='settings' element={<AdminPage />} />
              <Route path='add-quiz' element={<AddQuizPage />} />
            </Route>
          </Route>

          <Route path="*" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
