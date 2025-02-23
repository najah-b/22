import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Learn from './Pages/Learn';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Books from './Pages/Books';
import Voices from './Pages/Voices';

// Learn Pages
import Adjectives from './Pages/LearnPages/Adjectives';
import Verbs from './Pages/LearnPages/Verbs';
import Colors from './Pages/LearnPages/Colors';
import Jobs from './Pages/LearnPages/Jobs';
import Animals from './Pages/LearnPages/Animals';
import Family from './Pages/LearnPages/Family';
import Fruits from './Pages/LearnPages/Fruits';
import Devices from './Pages/LearnPages/Devices';

// Voices
import AdjectivesV from './Pages/VoicesPages/AdjectivesV';
import VerbsV from './Pages/VoicesPages/VerbsV';
import ColorsV from './Pages/VoicesPages/ColorsV';
import NumbersV from './Pages/VoicesPages/NumbersV';
import LettersV from './Pages/VoicesPages/LettersV';
import FruitsV from './Pages/VoicesPages/FruitsV';
import FamilyV from './Pages/VoicesPages/FamilyV';
import AnimalsV from './Pages/VoicesPages/AnimalsV';

// Styles
import './Style/Global/global.css';
import './Style/Home/home.css';
import './Style/LearnPage/learn.css';
import './Style/Voices/voices.css';
import './Style/Login/signup-login.css';
import './Style/Components/allComps.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {path: "/", element: <Home />,},
  {path: "About", element: <About />,},
  {path: "Learn", element: <Learn />,},
  {path: "Signup", element: <Signup />,},
  {path: "Login", element: <Login />,},
  {path: "Books", element: <Books />,},
  {path: "Voices", element: <Voices />,},

  {path: "Adjectives", element: <Adjectives />,},
  {path: "Verbs", element: <Verbs />,},
  {path: "Colors", element: <Colors />,},
  {path: "Jobs", element: <Jobs />,},
  {path: "Animals", element: <Animals />,},
  {path: "Family", element: <Family />,},
  {path: "Fruits", element: <Fruits />,},
  {path: "Devices", element: <Devices />,},

  {path: "AdjectivesV", element: <AdjectivesV />,},
  {path: "VerbsV", element: <VerbsV />,},
  {path: "ColorsV", element: <ColorsV />,},
  {path: "NumbersV", element: <NumbersV />,},
  {path: "LettersV", element: <LettersV />,},
  {path: "FruitsV", element: <FruitsV />,},
  {path: "FamilyV", element: <FamilyV />,},
  {path: "AnimalsV", element: <AnimalsV />,},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Toaster toastOptions={{
        success: {
          style: {
            background: 'green',
            color:"white"
          },
        },
        error: {
          style: {
            background: 'red',
            color:"white"
          },
        },
      }} />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();