# Support Ticket Management System

Welcome to the Support Ticket Management System, a backend service deployed on Heroku.

## Overview

The Support Ticket Management System is designed to efficiently handle support requests through two distinct API services, tailored for regular users and administrators. It employs user and ticket models to streamline the process of support ticket management.

### Frontend Repository

The frontend of the system is available in a separate repository, which you can access [here](https://github.com/tsl8505/support-ticket-management-system-front). This repository contains the user interface components that interact with the APIs provided by this backend system.

## API Services

### 1. User Authentication API

- **Endpoint:** `/api/auth`
- **Description:** Validates user credentials and determines the user type (regular or admin).

### 2. Ticket Management API

- **Endpoint:** `/api/tickets`
- **Description:** Handles support ticket creation, retrieval, and status updates.

## User Roles

### 1. Regular User

- Can create support requests.
- Can view the status of tickets posted by them.

### 2. Admin User

- Can update the status of support requests.
- Can add comments to support requests.
- Has access to view all support requests.

## Endpoints

### User Authentication

#### `POST /api/auth`

- **Request:**
  - Authenticate user credentials.
- **Response:**
  - Return user type (regular/admin).

### Ticket Management

#### `POST /api/tickets`

- **Request:**
  - Create a new support ticket.
- **Response:**
  - Return details of the created ticket.

#### `GET /api/tickets`

- **Request:**
  - Retrieve all tickets or user-specific tickets.
- **Response:**
  - Return a list of tickets.

#### `PUT /api/tickets/:id/status`

- **Request:**
  - Update the status of a support ticket.
   - Add a comment to a support ticket.
- **Response:**
  - Return updated ticket details.

## Deployment

The backend is deployed on Heroku: [Support Ticket Management System](https://support-ticket-system-8153002a38e1.herokuapp.com/)

## Issues and Contributions

Feel free to open issues or contribute to the project. Your feedback and contributions are highly appreciated.
