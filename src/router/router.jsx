import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import NuevoProducto from '../components/NuevoProducto';
import EditarProducto from '../components/EditarProducto';
import Productos from '../components/Productos';
import ErrorPage from '../components/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Productos />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'productos/nuevo',
        element: <NuevoProducto />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/productos/editar/:id',
        element: <EditarProducto />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
