import { useState } from "react";
import "./styles.css";

function App() {
  // State to track the current step of the form
  const [step, setStep] = useState(1);

  // State to track form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    gmailSurvey: "",
  });

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle the "Next" button click
  const handleNext = () => {
    // If on the last screen (password), submit the form
    if (step === 4) {
      handleSubmit();
    }
    // If on the email screen and email is a Gmail address, show the survey screen
    else if (step === 2 && formData.email.endsWith("@gmail.com")) {
      setStep(6); // Go to Gmail survey screen
    }
    // Otherwise, proceed to the next step
    else {
      setStep(step + 1);
    }
  };

  // Function to handle the "Back" button click
  const handleBack = () => {
    setStep(step - 1);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    setStep(5); // Go to success screen
  };

  // Function to handle the survey submission
  const handleSurveySubmit = () => {
    setStep(3); // Go to the Date of Birth screen after survey
  };

  // Function to render the current screen based on the step
  const renderScreen = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-container">
            <h2>Enter Your Name</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-box"
            />
            <button
              onClick={handleNext}
              disabled={!formData.name}
              className="next-button"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="form-container">
            <button onClick={handleBack} className="back-link">
              &lt; Back
            </button>
            <h2>Enter Your Email</h2>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-box"
            />
            <button
              onClick={handleNext}
              disabled={!formData.email}
              className="next-button"
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className="form-container">
            <button onClick={handleBack} className="back-link">
              &lt; Back
            </button>
            <h2>Enter Your Date of Birth</h2>
            <input
              type="text"
              name="dob"
              placeholder="mm/dd/yy"
              value={formData.dob}
              onChange={handleInputChange}
              className="input-box"
            />
            <button
              onClick={handleNext}
              disabled={!formData.dob}
              className="next-button"
            >
              Next
            </button>
          </div>
        );
      case 4:
        return (
          <div className="form-container">
            <button onClick={handleBack} className="back-link">
              &lt; Back
            </button>
            <h2>Enter Your Password</h2>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-box"
            />
            <button
              onClick={handleNext}
              disabled={!formData.password}
              className="submit-button"
            >
              Submit
            </button>
          </div>
        );
      case 5:
        return (
          <div className="form-container">
            <h2>Success!</h2>
            <p>Your form has been submitted successfully.</p>
          </div>
        );
      case 6:
        return (
          <div className="form-container">
            <button onClick={handleBack} className="back-link">
              &lt; Back
            </button>
            <h2>Why do you use Gmail?</h2>
            <input
              type="text"
              name="gmailSurvey"
              placeholder="Your answer"
              value={formData.gmailSurvey}
              onChange={handleInputChange}
              className="input-box"
            />
            <button
              onClick={handleSurveySubmit}
              disabled={!formData.gmailSurvey}
              className="next-button"
            >
              Next
            </button>
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  // Render the current screen based on the current step
  return <div className="App">{renderScreen()}</div>;
}

export default App;
