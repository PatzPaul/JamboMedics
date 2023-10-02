# JamboMedics 💉
A Personalized AI treatment recommendation system built under node js with python VENV on the backend and React on the frontend
## Running the program
#### Setting Up Your Development Environment

- Before you can start working with Python, NodeJS, and React, it is essential to set up your development environment properly.
- This includes installing the necessary tools, configuring your system, and setting up dependencies.
<p> Here’s a step-by-step guide to help you get started:</p>

[Installing Python:](https://www.python.org/downloads/). Make sure to add Python to your system’s PATH during installation, which allows you to run Python scripts from the command line.
[Setting up NodeJS:](https://nodejs.org/en/download/) and download the appropriate installer for your operating system. Install NodeJS and ensure that both NodeJS and its package manager, npm, are added to your system’s PATH.
Create-react-app:`vite + react:`The easiest way to set up a React project is by using the create-react-app tool, a CLI tool for generating boilerplate React applications. To install it, run the following command in your terminal or command prompt:

```bash
```
- Once installed, you can create a new React project using the command:

vite create-react-app project-name
- This command will generate a new React application with a pre-configured development environment and a basic folder structure.

<p>Additional Dependencies: Depending on your project requirements and chosen integration method, you may need to install additional dependencies, such as Flask, Django, or Express for server-side development. These can be installed using their respective package managers, such as pip for Python packages and npm for NodeJS packages.
</p>
Express: Write both frontend and backend code in JavaScript, Express is a popular web framework for NodeJS that can help you build server-side applications quickly and efficiently. Express can be combined with Python by creating API endpoints in Express that call Python scripts or functions using child processes or external libraries, such as python-shell.

### Backend 
To start the backend server proceed to the directory and add the following commands 

### Frontend
To run the frontend proceed with the following 

- Alternatively if you have docker installed and working you can proceed with the following steps 
### Docker
- go through the `docker-compose.yml` file



## Overview  
The objective of this project is to develop an AI recommendation system for personalized healthcare treatments based on patient data analysis. The system aims to address the challenges in providing tailored healthcare solutions to individuals, particularly in the context of East Africa. By leveraging advanced machine learning techniques and patient data, the system will generate customized treatment recommendations that take into account individual characteristics, medical history, and specific healthcare needs.
The project will begin with an extensive literature review, analyzing existing projects and technologies in the field of personalized healthcare treatments. A critical assessment of their strengths and weaknesses will provide valuable insights for the development of an improved AI recommendation system. Furthermore, the research design and methodology chapter will outline the project's scope, research objectives, and data collection methods.
The project will focus on three main populations within East Africa: urban areas, rural areas, and underserved communities. The beneficiaries of this system will include healthcare professionals, who will be equipped with a tool to make informed treatment decisions, as well as patients, who will receive personalized and effective healthcare interventions.




The project will employ various data analysis methods to derive meaningful insights from the collected data. The specific data analysis techniques will depend on the nature of the data and the research objectives. Here are some data analysis methods that may be used.
Descriptive statistics will be used to summarize and present the characteristics of the collected data. This includes measures such as mean, median, mode, standard deviation, and frequency distributions
Inferential statistics will be applied to make inferences and draw conclusions about the larger population based on the collected sample data. This may involve hypothesis testing, confidence intervals, regression analysis, correlation analysis, or analysis of variance (ANOVA). 
Machine learning algorithms will be employed to analyze the patient data and develop the AI recommendation system. This may include techniques such as classification, clustering, regression, and natural language processing. Machine learning algorithms will learn patterns and relationships within the data and generate personalized treatment recommendations based on patient-specific characteristics.
Qualitative data collected from interviews, focus group discussions, and observations will undergo thematic analysis. This involves identifying common themes, categorizing responses, and extracting meaningful insights.
Data visualization techniques, including charts, graphs, and plots, will be employed to visually represent the findings and communicate results effectively. Visualizations can aid in understanding complex relationships, patterns, and trends in the data. 
3.6 Testing plan for the system
The testing plan will be iterative, with regular test cycles and refinements based on the identified issues and feedback from various testing phases. Thorough testing will help ensure the robustness, reliability, and effectiveness of the AI recommendation system for personalized healthcare treatments. The following components outline the testing plan for the system.
Individual components of the system, such as algorithms, data processing modules, and user interface elements, will undergo unit testing. Unit tests will be designed to verify the correctness of each component in isolation. Test cases will be created to cover various scenarios, including normal inputs, edge cases, and boundary conditions. The purpose of unit testing is to identify and fix any bugs or issues within the system's individual components.
Once the individual components have passed the unit testing phase, integration testing will be conducted. Integration tests will evaluate the interactions and compatibility between different system modules. Test cases will focus on ensuring that data flows correctly between modules and that the overall system functions as expected. Integration testing aims to detect any issues arising from the integration of various components and to ensure seamless system operation.
Functional testing will assess the system's compliance with functional requirements and user expectations. Test cases will cover different features and functionalities of the AI recommendation system. The system's ability to generate personalized treatment recommendations based on patient data analysis will be thoroughly evaluated. Functional testing will ensure that the system performs the intended tasks accurately and efficiently.
Performance testing will assess the system's speed, responsiveness, and scalability under varying workloads. Test scenarios will simulate different levels of user traffic and data volumes to measure system performance. Performance metrics, such as response times, throughput, and resource utilization, will be monitored and evaluated. The goal of performance testing is to identify any bottlenecks or performance issues and optimize the system for efficient and reliable operation.
User acceptance testing involves involving end-users, such as healthcare professionals and patients, to evaluate the system's usability and effectiveness. Test cases will be designed to mimic real-world scenarios, allowing users to interact with the system and provide feedback. User feedback and suggestions will be gathered to improve the user interface, user experience, and overall system usability. User acceptance testing ensures that the AI recommendation system meets the needs and expectations of its intended users.
Security testing will assess the system's vulnerability to potential security threats and ensure the protection of sensitive patient data. Test cases will aim to identify any vulnerabilities, such as unauthorized access, data breaches, or data manipulation. Security measures, such as encryption, access controls, and data anonymization, will be rigorously tested. The system's compliance with privacy and security regulations will be verified (Smith et al., 2018).



## System Requirements
### Functional Requirements
The functional requirements define the specific capabilities and functionalities that the AI recommendation system for personalized healthcare treatments should possess. These requirements are directly related to the system's primary functions and tasks. The functional requirements for the system include Data Collection and Integration where the system should be able to gather patient data from various sources, such as electronic health records, diagnostic reports, and medical imaging systems. It should ensure the seamless integration of data from different healthcare systems to create a unified and comprehensive patient profile (Robinson, 2016, p. 25).
Data Analysis and Machine Learning. The system should employ advanced data analysis techniques, including statistical analysis and machine learning algorithms, to extract meaningful insights from patient data. It should utilize machine learning models to analyze patterns, correlations, and trends in the data to generate accurate and personalized treatment recommendations.
Personalized Treatment Recommendations. The system should generate tailored treatment recommendations based on the analysis of patient data, considering individual characteristics, medical history, and specific healthcare needs. It should provide recommendations for appropriate medications, therapies, lifestyle modifications, and preventive measures based on the patient's unique profile.
User Interface and Interaction. The system should have an intuitive and user-friendly interface that allows healthcare professionals to interact with and navigate through the system easily. It should present the analysis results and treatment recommendations in a clear and comprehensible manner, with visualizations and summaries for easy interpretation.
System Integration. The system should integrate with existing healthcare systems, such as electronic health records and hospital information systems, to facilitate seamless data exchange and retrieval. It should allow healthcare professionals to access patient data and treatment recommendations within their existing workflow and system interfaces.

### Non - Functional Requirements
<p>The non-functional requirements specify the characteristics and qualities that the AI recommendation system should possess. These requirements focus on aspects such as system performance, security, usability, and scalability. The non-functional requirements for the system include Performance where the system should deliver efficient and responsive performance, ensuring quick response times for data analysis and recommendation generation. It should handle concurrent user requests without significant delays or system bottlenecks (Johnson, 2020).
Security and Privacy.</p> 
- The system should incorporate robust security measures to protect patient data from unauthorized access, ensuring data confidentiality and integrity. It should comply with relevant data protection regulations and guidelines to maintain patient privacy.
Usability and User Experience.
- The system should have a user-friendly interface that is easy to navigate, allowing healthcare professionals to interact with the system intuitively and efficiently. It should provide clear and concise information, with intuitive visualizations and summaries to support informed decision-making.
Scalability and Flexibility.
- The system should be scalable to accommodate a growing volume of patient data and an increasing number of users. It should be flexible to adapt to evolving healthcare practices, technological advancements, and changes in treatment guidelines.
Reliability and Availability. 
- The system should ensure high reliability, minimizing system failures or downtime to ensure uninterrupted access to patient data and recommendations. It should have mechanisms in place for backup and disaster recovery to mitigate data loss or system disruptions.

