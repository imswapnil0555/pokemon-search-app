# Pokémon Search App

This project is a basic Pokémon search application built with Next.js (App Router), Tailwind CSS, and the PokeAPI. It allows users to search for Pokémon by type and name, and view detailed information about individual Pokémon.

## Features

-   **Pokémon Search:** Search for Pokémon by type and name.
-   **Type Filtering:** Filter the Pokémon list by selecting a type from the dropdown.
-   **Name Search:** Filter the Pokémon list by entering a name in the search input.
-   **Pokémon Details:** View detailed information about a Pokémon by clicking on its card.
-   **Dynamic Routing:** Uses dynamic routes to display Pokémon details.
-   **Breadcrumbs:** Displays breadcrumbs on the details page to show the navigation path.
-   **Responsive Design:** The application is responsive and works well on mobile devices.
-   **Server-Side Rendering (SSR):** Utilizes SSR for improved performance and SEO.
-   **Server Actions:** Uses server actions for data fetching and processing.
-   **Custom Hooks:** Implements custom hooks to separate concerns and improve code organization.

## Tech Stack

-   **Next.js (App Router):** For building the application.
-   **Tailwind CSS:** For styling the application.
-   **PokeAPI:** For fetching Pokémon data.

## Techniques Used

-   **Server and Client Components:** Utilizes both server and client components for optimal performance.
-   **Custom Hooks:** Implements custom hooks to separate concerns from the UI.
-   **Server-Side Rendering (SSR):** Renders pages on the server for improved performance and SEO.
-   **Server Actions:** Uses server actions for data fetching and processing.
-   **Dynamic Routes:** Implements dynamic routes to display Pokémon details.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/imswapnil0555/pokemon-search-app.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  **Open your browser and navigate to `http://localhost:3000`.**

## Project Structure
├── app/
│   ├── components/
│   │   ├── PokemonCard.tsx
│   │   ├── SearchForm.tsx
│   │   └── Breadcrumbs.tsx
│   ├── hooks/
│   │   └── usePokemon.ts
│   ├── pokemon/[name]
│   │   └── page.tsx
│   └── globals.css
│   └── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
└── postcss.config.js

