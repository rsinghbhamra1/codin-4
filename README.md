# Coding Assignment 14 - UC Portfolio Website

This project is a **React portfolio website** designed to showcase various projects and coursework completed in the program. Built with reusable components, the portfolio is optimized for deployment and can be easily run in a Docker container. The site allows viewers to explore the creator’s skills, projects, and other details relevant to software development.

In addition to the portfolio, the project setup includes **Husky** for pre-commit checks to maintain code quality. **GitHub Actions** also enforce automated checks on each push and pull request to keep the repository clean and error-free.

## Portfolio Overview

This portfolio includes the following sections:

1. **Basic Information**: A brief introduction with a profile image.
2. **Projects**: A showcase of selected projects, each with a description, image, and link.
3. **Skills**: An overview of technical skills and tools used.
4. **Developer Setup**: Details on preferred development environment and setup.

The project also includes a set of reusable components from the component library assignment, such as `Button`, `Card`, `Dropdown`, `HeroImage`, `Img`, `Label`, `RadioButton`, `Table`, and `Text`.

# Pre-commit Checks

The project setup includes:

- **Prettier** for code formatting.
- **ESLint** for linting.
- **Jest** tests to verify functionality.

## Getting Started

To run the portfolio locally on `localhost:5575`, follow the instructions below.

### Prerequisites

Make sure you have:

- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/get-started)

### Instructions

1. #### Clone the Repository

   Clone the project repository:

   ```bash
   git clone https://github.com/rsinghbhamra1/codin-4.git
   ```

2. #### Build the Docker Image

   Navigate to the project folder and build the Docker image:

   ```bash
   docker build -t bhamra_rupinderjit_coding_assignment14 .
   ```

3. #### Run the Docker Container

   Start the container on port 5575:

   ```bash
   docker run -d -p 5575:5575 --name coding_assignment14_portfolio bhamra_rupinderjit_coding_assignment14:latest
   ```

4. #### Access the Portfolio

   Open your browser and navigate to:

   ```
   http://127.0.0.1:5575
   ```
   Here, we can view the portfolio site and explore the components and sections.

### Stopping the Docker Container
To stop the container, run:

```bash
docker stop coding_assignment14_portfolio
```

To remove the container after stopping it:

```bash
docker rm coding_assignment14_portfolio
```