import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// syntax
const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        children : [{
            path : '/home',
            element : <Home/>,
            errorElement : <PageError/>
        }]
    }
])


{/* <RouterProvider router={router}/> */}

export const privateRoutes = [
    '/home',
    '/my-data',
    '/phone-assistance',
    '/client-attention',
    '/details',
    '/fee-payment',
    '/my-insurances',
    '/report-claim',
    '/notifications',
    '/faqs',
  ]
  
  export const publicRoutes = [
    '/',
    '/recover-password',
    '/new-password',
    '/register',
    '/certifacates',
    '/app-redirect',
  ]



  