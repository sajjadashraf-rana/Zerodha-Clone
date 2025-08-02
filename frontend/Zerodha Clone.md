# Zerodha Clone

## Project Structure

- **frontend/**: Contains all client-side code (React app).
    - Initialize with Vite:  
        ```bash
        npm create vite@latest frontend
        cd frontend
        npm install
        ```
    - **src/**: Main source directory.
        - **landing_page/**: Contains landing page components and assets.
            - **home/**: Home section components and assets.
                - Includes `<Navbar />`, `<HeroSection />`, `<Awards />`, `<Education />`, `<Pricing />`, `<OpenAccount />`, `<Stats />`, and `<Footer />` components.
            - **about/**: About section components and assets.
                - Includes `<HeroSection />` and `<Team />` components.
            - **pricing/**: Pricing section components and assets.
                - Includes `<HeroSection />` and `<Brokerage />` components.
            - **products/**: Products section components and assets.
                - Includes `<HeroSection />`, `<Universe />`, `<LeftSection />`, and `<RightSection />` components.
            - **signup/**: Signup section components and assets.
            - **support/**: Support section components and assets.
                - Includes `<HeroSection />` and `<CreateTicket />` components.
        - **Footer.jsx**: Footer component.
        - **Navbar.jsx**: Navbar component.
        - **Install Bootstrap**:  
            ```bash
            npm install bootstrap
            ```
            Import Bootstrap CSS in `src/main.jsx` or `src/index.js`:
            ```js
            import 'bootstrap/dist/css/bootstrap.min.css';
            ```
            - **Install Bootstrap Icons**:  Bootstrap Icons (Official & Free)
                ```bash
                npm install bootstrap-icons
                ```
                [Bootstrap Icons](https://icons.getbootstrap.com)
                Import Bootstrap Icons CSS in `src/main.jsx` or `src/index.js`:
                ```js
                import 'bootstrap-icons/font/bootstrap-icons.css';
                ```
                - **Install Font Awesome**:  
                    ```bash
                    npm install @fortawesome/fontawesome-free
                    ```
                    [Font Awesome](https://fontawesome.com):
                    Import Font Awesome CSS in `src/main.jsx` or `src/index.js`:
                    ```js
                    import '@fortawesome/fontawesome-free/css/all.min.css';
                    ```
                    
                    - **Install Material UI**:  
                        ```bash
                        npm install @mui/icons-material @mui/material @emotion/react @emotion/styled
                        ```
                        [Google Material UI](https://fonts.google.com/icons):
                        Import Material UI components as needed in your React files, for example:
                        ```js
                        import Button from '@mui/material/Button';
                        import IconButton from '@mui/material/IconButton';
                        import MenuIcon from '@mui/icons-material/Menu';
                        ```
                    - **Install Heroicons**:  
                        ```bash
                        npm install @heroicons/react
                        ```
                        Link: [Heroicons](https://heroicons.com)
                        Descriptions: Great for modern dashboards and minimal UIs. 

                        Import Heroicons in your React files as needed, for example:
                        ```js
                        import { ArrowRightIcon } from '@heroicons/react/24/solid';
                        ```
                    - **Install React Feather**:  
                        ```bash
                        npm install react-feather
                        ```
                        [React Feather](https://github.com/feathericons/react-feather)
                        [Feather Icons](https://feathericons.com)
                        Collection of simply beautiful open source icons.

                        Import React Feather icons in your React files as needed, for example:
                        ```js
                        import { Camera } from 'react-feather';
                        ```
                        - **Install Tabler Icons**:  
                            ```bash
                            npm install @tabler/icons-react
                            ```
                            [Tabler Icons](https://tabler-icons.io/) (https://tabler.io/icons)
                            Import Tabler Icons in your React files as needed, for example:
                            ```js
                            import { IconHome } from '@tabler/icons-react';
                            ```

                            - **Install React Router DOM**:  
                                ```bash
                                npm install react-router-dom
                                ```
                                [React Router Documentation](https://reactrouter.com/)
                                Import and use React Router in your React files as needed, for example:
                                ```js
                                import { BrowserRouter, Routes, Route } from 'react-router-dom';
                                ```     
                                              





- **backend/**: Contains all server-side code (APIs, database, etc.).