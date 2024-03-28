import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Main } from './pages/Main';
import { CardList } from './pages/CardList'
import { FormSignIn } from './pages/FormSignIn'
import { FormSignUp } from './pages/FormSignUp'
import { CardPost } from './pages/CardPost';
import { CardSearchList } from './pages/CardSearchList';
import { AuthActivatePage } from './pages/AuthActivatePage';
import { UserActivation } from './components/UserActivation';
import { MyCardList } from './pages/MyCardList'
import { NewPost } from './pages/NewPost';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/posts/new',
        element: <NewPost />
      },
      {
        path: '/posts/:id',
        element: <CardPost />
      },
      {
        path: '/posts/page/:pageNumber',
        element: <CardList />
      },
      {
        path: '/my-posts/page/:pageNumber',
        element: <MyCardList />
      },
      {
        path: '/search',
        element: <CardSearchList />
      },
      {
        path: '/sign-in',
        element: <FormSignIn />
      },
      {
        path: '/sign-up',
        element: <FormSignUp />
      },
      {
        path: '/auth/activate',
        element: <UserActivation />
      },
      {
        path: '/auth/activate/:uid/:token',
        element: <AuthActivatePage />
      },
      {
        path: '/posts/search/:query',
        element: <CardSearchList />
      },
    ]
  }
])
