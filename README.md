Profile Manager Application
This application allows users to manage their profiles, including entering personal information, professional experiences, skills, and uploading resumes. Users can view their profile summary and the uploaded resume.

Features
User Profile Management
Professional Experience Entry
Skill Selection with Multi-select
Resume Upload and View
Responsive Design

Installation
Clone the repository
cd to the project directory

Install dependencies:

yarn to install dependencies.
Running the Application

To start the application, use the following command:
yarn run dev
This will start the development server, and you can view the application by navigating to http://localhost:5173 in your web browser.

Project Structure
src/components/:
Layout.js: Layout component for consistent structure.
Navbar.js: Navigation bar with a dropdown for accessing the Profile Manager.
ProfileForm.js: Form for entering user profile information.
ProfileSummary.js: Displays the profile summary and the uploaded resume.
ExperienceEntry.js: Component for adding multiple professional experiences.

src/assets/:
images/: Directory for storing image assets such as the logo.

src/pages/:
HomePage.jsx: Component for storing homepage.
ProfileManager.jsx: Component for storing profile information.

Usage
Adding Profile Information
Navigate to the Profile Manager by clicking on the icon in the top-right of the navbar.
Enter your full name, email, and phone number.
Add professional experiences by clicking the "Add Experience" button.
Select your skills from the multi-select dropdown.
Upload your resume (PDF or DOCX format).
Click "Save Profile" to save the information.
Viewing Profile Summary
After saving the profile, the profile summary will display on the right side of the screen, including a link to view the uploaded resume.

Additional Notes
Ensure the uploaded resume file is either a PDF or DOCX to avoid validation errors.
The application is responsive.
Potential Enhancements
Enhance the UI/UX for better usability.

By following these instructions, you should be able to set up, run, and use the Profile Manager application effectively.
