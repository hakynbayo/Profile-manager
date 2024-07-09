import styled from "styled-components";
import PropTypes from "prop-types";

const SummaryContainer = styled.div`
  width: 45%;
  padding: 1rem;
  background-color: #077bff;
  color: #fff;
  border-radius: 0.8rem;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    width:100%;
  }

  @media (max-width: 480px) {
    padding: 0.7rem;
    width:100%;
  }
`;

// Component to display a summary of a user's profile
const ProfileSummary = ({ profile }) => {
  return (
    <SummaryContainer>
      <h3>Profile Summary</h3>

      {/* Display the user's full name */}
      <p>
        <strong>Name:</strong> {profile.fullName}
      </p>

      {/* Display the user's email */}
      <p>
        <strong>Email:</strong> {profile.email}
      </p>

      {/* Display the user's phone number */}
      <p>
        <strong>Phone Number:</strong> {profile.phoneNumber}
      </p>

      {/* Display the user's skills */}
      <p>
        <strong>Skills:</strong> {profile.skills}
      </p>

      {/* Display the user's experiences */}
      <div>
        <strong>Experiences:</strong>
        {profile.experiences.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Role: {exp.role}</p>
            <p>Start Date: {exp.startDate}</p>
            <p>End Date: {exp.current ? "Currently Working" : exp.endDate}</p>
          </div>
        ))}
      </div>

      {/* Display a link to the resume if available */}
      {profile.resume && (
        <p>
          <strong>Resume:</strong>{" "}
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </p>
      )}
    </SummaryContainer>
  );
};

// Define PropTypes for type-checking the component props
ProfileSummary.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileSummary;
