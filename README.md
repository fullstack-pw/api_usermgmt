api_usermgmt
============

**api_usermgmt** is a sample API designed to demonstrate continuous integration and continuous delivery workflows. It provides basic user management functionality (create, read, update, delete users) and is deployed in multiple Kubernetes environments (dev, stg, prod) using the pipelines and infrastructure defined in [pipelines repository](https://github.com/fullstack-pw/pipelines).

* * * * *

Overview
--------

-   **Purpose**: Showcase CI/CD practices and environment promotion using a simple user management API.
-   **Language**: Go
-   **Deployments**:
    -   [dev.api-usermgmt.fullstack.pw](https://dev.api-usermgmt.fullstack.pw)
    -   [stg.api-usermgmt.fullstack.pw](https://stg.api-usermgmt.fullstack.pw)
    -   [api-usermgmt.fullstack.pw](https://api-usermgmt.fullstack.pw)

* * * * *

Features
--------

1.  **Basic CRUD**: Create, read, update, and delete user records.
2.  **Sample Endpoints**:
    -   `POST /users` -- Create a new user
    -   `GET /users` -- List all users
    -   `GET /users/:id` -- Retrieve a specific user
    -   `PUT /users/:id` -- Update an existing user
    -   `DELETE /users/:id` -- Remove a user
3.  **CI/CD Integration**:
    -   Automated build and test pipelines using GitHub Actions and/or GitLab CI.
    -   Container image built and pushed to `registry.fullstack.pw`.
    -   Deployment to K3s clusters (dev, stg, prod) managed in the [infra](https://github.com/fullstack-pw/infra) repository.