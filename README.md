# JamboMedics 💉
A Personalized AI treatment recommendation system built under node js with python VENV on the backend and React on the frontend

#### Setting Up Your Development Environment

- Before you can start working with Python, NodeJS, and React, it is essential to set up your development environment properly.
- This includes installing the necessary tools, configuring your system, and setting up dependencies.
<p> Here’s a step-by-step guide to help you get started:</p>

[Installing Python:](https://www.python.org/downloads/). Make sure to add Python to your system’s PATH during installation, which allows you to run Python scripts from the command line.<br>
[Setting up NodeJS:](https://nodejs.org/en/download/) and download the appropriate installer for your operating system. Install NodeJS and ensure that both NodeJS and its package manager, npm, are added to your system’s PATH.<br>
Create-react-app:`vite + react:`The easiest way to set up a React project is by using the create-react-app tool, a CLI tool for generating boilerplate React applications. To install it, run the following command in your terminal or command prompt:

```bash
```
- Once installed, you can create a new React project using the command:

vite create-react-app project-name
- This command will generate a new React application with a pre-configured development environment and a basic folder structure.

<p>Additional Dependencies: Depending on your project requirements and chosen integration method, you may need to install additional dependencies, such as Flask, or Express for server-side development. These can be installed using their respective package managers, such as pip for Python packages and npm for NodeJS packages.
</p>
- Express: Write both frontend and backend code in JavaScript, Express is a popular web framework for NodeJS that can help you build server-side applications quickly and efficiently.
- Express can be combined with Python by creating API endpoints in Express that call Python scripts or functions using child processes or external libraries, such as python-shell.

## Running the Program

### Backend

To run the backend server, follow these steps:

- Navigate to the backend directory:
```bash
cd backend
```
- Install the required dependencies:
```bash
npm install
```
- Start the server:
```bash
npm start
```

### Frontend

To run the frontend, follow these steps:

- Navigate to the frontend directory:
  ```bash
  cd frontend
  ```
- Install the required dependencies:
  ```bash
  npm install
  ```
- Start the frontend:

  ```bash
  npm start
  ```

Alternatively, if you have Docker installed and working, you can proceed with the following steps:

### Docker

1. Go through the `docker-compose.yml` file.
2. Execute the necessary commands to set up and run the application using Docker.
   OR Proceed to the terminal and type the following to start building the image
   ```bash
   docker compose up
   ```

## Overview

The objective of this project is to develop an AI recommendation system for personalized healthcare treatments based on patient data analysis. The system aims to address the challenges in providing tailored healthcare solutions to individuals, particularly in the context of East Africa. By leveraging advanced machine learning techniques and patient data, the system will generate customized treatment recommendations that take into account individual characteristics, medical history, and specific healthcare needs.

...

## Testing Plan for the System

The testing plan will be iterative, with regular test cycles and refinements based on the identified issues and feedback from various testing phases. The testing components include:

- **Unit Testing:** Individual components of the system, such as algorithms, data processing modules, and user interface elements, will undergo unit testing. Test cases will be designed to verify the correctness of each component in isolation, covering various scenarios, including normal inputs, edge cases, and boundary conditions.

- **Integration Testing:** Once the individual components have passed the unit testing phase, integration testing will be conducted to evaluate interactions and compatibility between different system modules. This ensures that data flows correctly between modules and that the overall system functions as expected.

- **Functional Testing:** Functional testing will assess the system's compliance with functional requirements and user expectations. It will ensure that the system performs the intended tasks accurately and efficiently.

- **Performance Testing:** Performance testing will assess the system's speed, responsiveness, and scalability under varying workloads. It will measure performance metrics, such as response times, throughput, and resource utilization.

- **User Acceptance Testing:** User acceptance testing involves end-users, such as healthcare professionals and patients, to evaluate the system's usability and effectiveness in mimicked real-world scenarios.

- **Security Testing:** Security testing will assess the system's vulnerability to potential security threats and ensure the protection of sensitive patient data.

## System Requirements

### Functional Requirements

The functional requirements define the specific capabilities and functionalities that the AI recommendation system for personalized healthcare treatments should possess. These requirements are directly related to the system's primary functions and tasks. The functional requirements for the system include:

- **Data Collection and Integration:** The system should be able to gather patient data from various sources, such as electronic health records, diagnostic reports, and medical imaging systems.

- **Personalized Treatment Recommendations:** The system should generate tailored treatment recommendations based on the analysis of patient data, considering individual characteristics, medical history, and specific healthcare needs. It should provide recommendations for appropriate medications, therapies, lifestyle modifications, and preventive measures based on the patient's unique profile.

- **User Interface and Interaction:** The system should have an intuitive and user-friendly interface that allows healthcare professionals to interact with and navigate through the system easily. It should present the analysis results and treatment recommendations in a clear and comprehensible manner, with visualizations and summaries for easy interpretation.

- **System Integration:** The system should integrate with existing healthcare systems, such as electronic health records and hospital information systems, to facilitate seamless data exchange and retrieval. It should allow healthcare professionals to access patient data and treatment recommendations within their existing workflow and system interfaces.

### Non-Functional Requirements

The non-functional requirements specify the characteristics and qualities that the AI recommendation system should possess. These requirements focus on aspects such as system performance, security, usability, and scalability. The non-functional requirements for the system include:

- **Security and Privacy:** The system should incorporate robust security measures to protect patient data from unauthorized access, ensuring data confidentiality and integrity.

- **Usability and User Experience:** The system should have a user-friendly interface that is easy to navigate, allowing healthcare professionals to interact with the system intuitively and efficiently. It should provide clear and concise information, with intuitive visualizations and summaries to support informed decision-making.

- **Scalability and Flexibility:** The system should be scalable to accommodate a growing volume of patient data and an increasing number of users. It should be flexible to adapt to evolving healthcare practices, technological advancements, and changes in treatment guidelines.

- **Reliability and Availability:** The system should ensure high reliability, minimizing system failures or downtime to ensure uninterrupted access to patient data and recommendations. It should have mechanisms in place for backup and disaster recovery to mitigate data loss or system disruptions.
