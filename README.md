# Comfy Store

A modern e-commerce web application built with React, featuring a responsive design, state management, and seamless shopping experience.

## Live Demo

🚀 [Visit Comfy Store](https://comfy-store-react-seven.vercel.app/)

## Features

- **Dynamic Product Catalog**: Browse through a wide range of products with real-time updates
- **User Authentication**: Secure login and registration system
- **Shopping Cart**: Full-featured cart management with Redux state persistence
- **Order Management**: Track and view order history
- **Responsive Design**: Built with Tailwind CSS and DaisyUI for a modern, responsive interface
- **Theme Support**: Light and dark mode support using DaisyUI themes (Winter and Dracula)

## Tech Stack

- **Frontend Framework**: React 18
- **Routing**: React Router v6
- **State Management**: 
  - Redux Toolkit for global state
  - React Query for server state
- **Styling**: 
  - Tailwind CSS
  - DaisyUI components
- **Build Tool**: Vite
- **Additional Libraries**:
  - Axios for API requests
  - React Toastify for notifications
  - Day.js for date handling
  - React Icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/comfy-store.git
cd comfy-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route components
│   ├── HomeLayout.jsx  # Main layout wrapper
│   ├── Landing.jsx     # Homepage
│   ├── Products.jsx    # Products listing
│   └── ...
├── utils/             # Utility functions and store
├── App.jsx           # Root component with routing setup
└── main.jsx         # Application entry point
```

## Routing

The application uses React Router v6 with a nested routing structure:

- `/` - Landing page with featured products
- `/products` - Product catalog
- `/products/:id` - Individual product details
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/orders` - Order history
- `/login` - User login
- `/register` - User registration

## State Management

- **Redux Toolkit**: Manages global application state (user authentication, cart)
- **React Query**: Handles server state with built-in caching (products, orders)
  - Configured with a 5-minute stale time for optimal performance

## Styling

The project uses Tailwind CSS with DaisyUI for styling:

- Custom utility class `.align-element` for consistent maximum width and padding
- Two theme options: Winter (light) and Dracula (dark)
- Responsive design patterns throughout the application

## Development Tools

- React Query DevTools (available in development mode)
- ESLint configuration for code quality
- Vite for fast development and optimal builds

## Error Handling

- Global error boundary with custom Error component
- Route-specific error elements using `ErrorElement` component
- Toast notifications for user feedback

## Deployment

The application is deployed on Vercel and can be accessed at [https://comfy-store-react-seven.vercel.app/](https://comfy-store-react-seven.vercel.app/). 

To deploy your own instance:

1. Fork this repository
2. Create a new project on Vercel
3. Connect your forked repository
4. Deploy with default settings

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
