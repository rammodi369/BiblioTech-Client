import './App.css'
import AdminDashboard from './components/dashboard/AdminDasboard';
import Footer from './components/pages/Footer';
import Header from './components/pages/Header';
import NotFound from './components/pages/NotFound';
import SignIn from './components/auth/Login'
import Register from './components/auth/Register'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser,clearUser } from './redux/userslice';
import {jwtDecode} from 'jwt-decode';
import Navbar from './components/pages/Navbar';
import Homepage from './components/pages/Homepage';
import Bookinfo from './components/pages/BookInfo';
import LibrarianDashboard from './components/Librarian/LibrarianDashBoard';
import LibrarianHomepage from './components/Librarian/Homepage';
import Finance from './components/Librarian/Finance';
import FeedbackForm from './components/pages/Feedback';
import AddBooks from './components/Librarian/AddBooks';
import AboutUs from './components/pages/AboutUs';
import RequestList from './components/Librarian/RequestList';
import BookHisList from './components/pages/BookHisList';
import BookHistory from './components/pages/BookHistory';
import UsersHisList from './components/pages/UserHisList';
import UserHistory from './components/pages/UserHistory';
import UserProfile from './components/pages/Profile';
import BookList from './components/Librarian/BookList';
import EditBook from './components/Librarian/EditBooks';
import AdminHomepage from './components/dashboard/Homepage';
import AdminFinance from './components/dashboard/Finance';
import AdminBookHisList from './components/dashboard/BookHisList';
import AdminBookHistory from './components/dashboard/BookHistory';
import AdminUsersHisList from './components/dashboard/UserHisList';
import AdminUserHistory from './components/dashboard/UsersHistory';
import AdminBookList from './components/dashboard/BookList';
import AdminEditBook from './components/dashboard/EditBook';
import AdminUsers from './components/dashboard/AdminUser';
import SearchBooksPage from './components/pages/SearchBooksPage';
import PersonHistory from './components/pages/PersonHistory';
import AddQuestion from './components/Librarian/AddQuestion';
import QuestionList from './components/components/QuestionList';
import AddStudyMaterial from './components/Librarian/AddStudyMaterial';
import SearchMaterialsPage from './components/pages/SearchMaterialsPage';

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        dispatch(setUser({ user: decoded.user, token }));

      } catch (error) {
        console.error('Token is invalid:', error);
        localStorage.removeItem('token');
        dispatch(clearUser());
      }
    }
  }, [dispatch]);


  
  // console.log(user);
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <>
               {/* User Login */}
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<Register />} />
              <Route path="*" element={<SignIn/>} />

            </>
          ) : (
            <>
            
             {/* <Route path="/" element={<><Header/><Homepage/><Footer /></>} /> */}
             <Route path="/" element={<><Navbar/><Homepage/><Footer /></>} />
             <Route path="api/books/:id" element={<><Navbar/><Bookinfo /><Footer /></>} />
             <Route path="/about-us" element={<><Navbar/><AboutUs/><Footer/></>}/>
             <Route path="/feedback" element={<><Navbar/><FeedbackForm/><Footer /></>} />
             <Route path ="/profile" element={<><Navbar/><UserProfile/><Footer/></>}/>
             <Route path="/search-books" element={<><Navbar/><SearchBooksPage/><Footer/></>}/>
             <Route path="/materials" element={<><Navbar/><SearchMaterialsPage/><Footer/></>}/>
             <Route path ="users-history/:id" element={<><Navbar/><PersonHistory/><Footer/></>}/>
             <Route path ="question-Bank" element={<><Navbar/><QuestionList/><Footer/></>}/>
             
             {/* Librarian Aceesable routes only*/}
             {user.role === 'librarian' && (
             <Route path="librarian" element={<LibrarianDashboard />}>
               <Route index element={<LibrarianHomepage/>} />
               <Route path="finance" element={<Finance />} />
               <Route path="add-books" element={<AddBooks />} />
               <Route path="add-question" element={<AddQuestion />} />
               <Route path="add-material" element={<AddStudyMaterial />} />
               <Route path="requests" element={<RequestList/>}/>
               <Route path ="book-history" element={<BookHisList/>}/>
               <Route path ="books/history/:id" element={<BookHistory/>}/>
               <Route path ="users-history" element={<UsersHisList/>}/>
               <Route path ="users-history/:id" element={<UserHistory/>}/>
               <Route path ="edit-books" element={<BookList/>}/>
               <Route path ="edit-books/:bookId" element={<EditBook/>}/>
            </Route>
             )}

             {/* Admin Acessable routes only */}
              {user.role === 'admin' && (
                <Route path="/admin" element={<><AdminDashboard /></>} >
               <Route index element={<AdminHomepage/>} />
               <Route path="finance" element={<AdminFinance />} />
               <Route path="add-books" element={<AddBooks />} />
               <Route path="requests" element={<RequestList/>}/>
               <Route path ="book-history" element={<AdminBookHisList/>}/>
               <Route path ="books/history/:id" element={<AdminBookHistory/>}/>
               <Route path ="users-history" element={<AdminUsersHisList/>}/>
               <Route path ="users-history/:id" element={<AdminUserHistory/>}/>
               <Route path ="edit-books" element={<AdminBookList/>}/>
               <Route path ="edit-books/:bookId" element={<AdminEditBook/>}/>
               <Route path ="profile-setting" element={<AdminUsers/>}/>
                </Route>
              )}
              <Route path="*" element={<><Navbar /><NotFound /><Footer /></>} />

            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;