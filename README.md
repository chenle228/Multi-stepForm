# 🚀 Multi-Step Form

Welcome to the **Multi-Step Form**! This form is designed to make data collection smooth and engaging, with a series of steps that guide users through entering their information and several functionalities and features to ensure a great user experience and data integrity.

## 📋 Features

1. **Sequential Navigation**:
   - The form consists of 4 screens, each dedicated to a specific piece of information:
     - **Screen 1**: Enter Your Name
     - **Screen 2**: Enter Your Email
     - **Screen 3**: Enter Your Date of Birth
     - **Screen 4**: Enter Your Password

2. **Conditional Branching**:
   - If the user enters a Gmail address on the Email screen, they are redirected to a survey screen asking why they use Gmail before proceeding to the Date of Birth screen.

3. **User-Friendly Navigation**:
   - **Back Navigation**: Users can go back to the previous screen (except on the first screen) using a stylish `&lt; back` link.
   - **Next Button**: Moves users forward through the form while validating inputs at each step.
   - **Submit Button**: Finalizes the form submission on the last screen.

4. **Success Screen**:
   - After successful submission, users are greeted with a success message.

## 💻 Tech Stack

- **React**: For building the interactive UI components and managing form state.
- **CSS**: For styling the form and ensuring a responsive design.
- **JavaScript**: To handle validation logic and form interactions.

## 🛠️ How It Works

1. **Step 1: Enter Your Name**:
   - Input box for the name and a "Next" button to proceed.

2. **Step 2: Enter Your Email**:
   - Input box for the email. 
   - If the email ends with `@gmail.com`, users are redirected to the survey screen.

3. **Step 3: Enter Your Date of Birth**:
   - Input box with placeholder `mm/dd/yy`. 

4. **Step 4: Enter Your Password**:
   - Input box for the password.
   - Submit button to finalize the form.

5. **Survey Screen** (Conditional):
   - Asks users why they use Gmail and redirects to the Date of Birth screen after completion.

6. **Success Screen**:
   - Displays a confirmation message that the form has been submitted successfully.

## 🎨 Visuals

The form is styled for a clean, user-friendly experience with vertical alignment of input fields and navigation buttons.

## 🏃‍♀️ How to Run 
To get started with the Crypto Converter, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chenle228/Multi-stepForm.git
2. **Navigate to the Project Directory**:
   ```bash
   cd Multi-stepForm
3. **Install Dependencies**:
   ```bash
   npm install
4. **Run the Application**:
   ```bash
   npm start
5. **Open your browser and navigate to the link below to see the app in action!** 🚀
   ```bash
   http://localhost:3000

Feel free to explore and use this multi-step form to enhance your user data collection experience! 🎉
