# Gizmo Cart

Gizmo Cart is a modern, full-stack, multi-vendor e-commerce platform built with Next.js, Prisma, and Tailwind CSS. It allows vendors to create their own stores, manage products, and handle orders, while providing a seamless shopping experience for customers.

## Features

### For Customers
- **Browse Products:** Explore products by category or search for specific items.
- **Shop from Multiple Vendors:** Purchase products from different stores in a single platform.
- **Shopping Cart:** Add and manage products in the cart.
- **Seamless Checkout:** Place orders with ease using multiple payment methods.
- **Order Tracking:** View order history and track the status of current orders.
- **Product Ratings:** Rate and review purchased products.

### For Store Owners (Vendors)
- **Store Management:** Create and customize your own online store.
- **Product Management:** Add, update, and manage your product listings.
- **Order Fulfillment:** View and manage incoming orders for your store.
- **Dashboard:** Get insights into your store's performance.

### For Administrators
- **Vendor Approval:** Approve and manage new vendor applications.
- **Store Management:** Oversee all stores on the platform.
- **Coupon Management:** Create and manage promotional coupons.
- **Platform Analytics:** Monitor the overall health and performance of the marketplace.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (with Neon)
- **Authentication:** [Clerk](https://clerk.com/)
- **Background Jobs:** [Inngest](https://www.inngest.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **UI Components:** [Lucide React](https://lucide.dev/guide/packages/lucide-react) (for icons), [Recharts](https://recharts.org/) (for charts)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/)
- A [PostgreSQL](https://www.postgresql.org/download/) database. You can use a free Neon database from [here](https://neon.tech/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/gizmo-cart.git
    cd gizmo-cart
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project by copying the example file:
    ```bash
    cp .env.example .env
    ```
    Then, add the following required environment variables to your `.env` file:

    ```env
    # Database
    DATABASE_URL="your_postgresql_connection_string"
    DIRECT_URL="your_postgresql_direct_connection_string" # Required for Prisma migrations

    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
    CLERK_SECRET_KEY="your_clerk_secret_key"

    # Inngest
    INNGEST_EVENT_KEY="your_inngest_event_key"

    # Other
    NEXT_PUBLIC_CURRENCY_SYMBOL="$"
    ```

4.  **Sync the database schema:**
    Run the following command to sync your Prisma schema with your database:
    ```bash
    npx prisma db push
    ```

### Running the Application

-   **To run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

-   **To create a production build:**
    ```bash
    npm run build
    ```

-   **To start the production server:**
    ```bash
    npm run start
    ```

## Project Structure

The project follows the Next.js App Router structure:

-   `app/(public)`: Routes accessible to all users (e.g., home, product pages, cart).
-   `app/admin`: Routes and components for the admin dashboard.
-   `app/store`: Routes and components for the vendor/store owner dashboard.
-   `app/api`: API routes, including the Inngest event handler.
-   `components`: Shared and reusable React components.
-   `inngest`: Configuration and functions for Inngest background jobs.
-   `lib`: Utility functions, Redux store, and Prisma client instance.
-   `prisma`: Contains the database schema (`schema.prisma`).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.