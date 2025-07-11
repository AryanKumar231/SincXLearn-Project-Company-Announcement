// Importing necessary libraries and components
import { createBrowserRouter, RouterProvider } from 'react-router'; 

// Importing layout of the application
import Layout from './layout.jsx';


// Importing pages
import CreateAnoun from './pages/CreateAnoun.jsx';
import ShowAnoun from './pages/ShowAnoun.jsx';
import EditAnoun from './pages/EditAnoun.jsx';



// Main App component that sets up the router and routes
const App = () => {

    // Creating a routes
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <ShowAnoun />
                },
                {
                    path: 'create-announcement',
                    element: <CreateAnoun />
                },{
                    path: 'update-announcement/:id',
                    element: <EditAnoun />
                }
            ],

            // Handling not found routes
            errorElement: <div className='text-red-500 grid place-content-center h-screen w-full lg:text-5xl text-xl'>Opps! Something went wrong</div>
        }
    ]);

    return (
        // Providing the routes to the application
        <RouterProvider router={router} />
    );
};

export default App;
