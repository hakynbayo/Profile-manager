import { Controller } from "react-hook-form";
import styled from "styled-components";
import Select from "react-select";
import ExperienceEntry from "./ExperienceEntry";
import PropTypes from "prop-types";

// Styled component for a form group container
const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

// Styled component for form labels
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

// Styled component for input fields
const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
`;

// Styled component for button
const Button = styled.button`
  padding: 0.8rem 1rem;
  background-color: #fff;
  color: #007bff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #007bff;
  }
`;

// Options for the skills dropdown
const skillsOptions = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "React", label: "React" },
  { value: "Node.js", label: "Node.js" },
  { value: "CSS", label: "CSS" },
  { value: "HTML", label: "HTML" },
  { value: "Java", label: "Java" },
  { value: "NextJs", label: "NextJs" },
  { value: "Tailwind", label: "Tailwind" },
  { value: "Git", label: "Git" },
  { value: "C#", label: "C#" },
];

// ProfileForm component definition
const ProfileForm = ({
  register,
  handleSubmit,
  control,
  errors,
  fields,
  append,
  remove,
  handleResumeUpload,
  onSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Profile Manager</h3>
      {/* Full Name input field */}
      <FormGroup>
        <Label>Full Name</Label>
        <Input
          type="text"
          {...register("fullName", { required: true })} // Register with validation
        />
        {errors.fullName && <p>This field is required</p>} {/* Error message */}
      </FormGroup>

      {/* Email input field */}
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })} // Register with validation and pattern check
        />
        {errors.email && <p>Please enter a valid email</p>}{" "}
        {/* Error message */}
      </FormGroup>

      {/* Phone Number input field */}
      <FormGroup>
        <Label>Phone Number</Label>
        <Input
          type="tel"
          {...register("phoneNumber", {
            required: "This field is required", // Custom error message
            pattern: {
              value: /^[0-9]/, // Pattern for valid phone number
              message: "Please enter a valid phone number", // Custom error message
            },
          })}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}{" "}
        {/* Error message */}
      </FormGroup>

      {/* Professional Experiences section */}
      <FormGroup>
        <Label>Professional Experiences</Label>
        {fields.map((item, index) => (
          <ExperienceEntry
            key={item.id}
            index={index}
            item={item}
            register={register}
            errors={errors}
            remove={remove}
          />
        ))}
        {/* Button to add a new experience */}
        <Button type="button" onClick={() => append({})}>
          Add Experience
        </Button>
      </FormGroup>

      {/* Skills selection using react-select */}
      <FormGroup>
        <Label>Skills</Label>
        <Controller
          name="skills"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              {...field}
              isMulti // Allow multiple selections
              options={skillsOptions} // Options for the select input
              classNamePrefix="react-select" // Prefix for custom styling
            />
          )}
          rules={{ required: true }} // Validation rule
        />
        {errors.skills && <p>This field is required</p>} {/* Error message */}
      </FormGroup>

      {/* Resume upload input field */}
      <FormGroup>
        <Label>Upload Resume</Label>
        <Input
          type="file"
          {...register("resume", { required: true })}
          onChange={handleResumeUpload} // Handle file upload
        />
        {errors.resume && (
          <p>{errors.resume.message || "This field is required"}</p> // Error message */
        )}
      </FormGroup>

      {/* Submit button */}
      <Button type="submit">Save Profile</Button>
    </form>
  );
};

// PropTypes validation for the component props
ProfileForm.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  append: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  handleResumeUpload: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileForm;
