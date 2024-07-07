import PropTypes from "prop-types";
import styled from "styled-components";

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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled component for each experience entry container
const ExperienceContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.4rem;
  background-color: #f9f9f9;
`;

// Component for an individual experience entry
const ExperienceEntry = ({ index, item, register, errors, remove }) => {
  return (
    <ExperienceContainer key={item.id}>
      {/* Company input field */}
      <FormGroup>
        <Label>Company</Label>
        <Input
          type="text"
          {...register(`experiences.${index}.company`, { required: true })}
        />
        {errors.experiences?.[index]?.company && <p>This field is required</p>}
      </FormGroup>

      {/* Role input field */}
      <FormGroup>
        <Label>Role</Label>
        <Input
          type="text"
          {...register(`experiences.${index}.role`, { required: true })}
        />
        {errors.experiences?.[index]?.role && <p>This field is required</p>}
      </FormGroup>

      {/* Start Date input field */}
      <FormGroup>
        <Label>Start Date</Label>
        <Input
          type="date"
          {...register(`experiences.${index}.startDate`, { required: true })}
        />
        {errors.experiences?.[index]?.startDate && (
          <p>This field is required</p>
        )}
      </FormGroup>

      {/* End Date input field */}
      <FormGroup>
        <Label>End Date</Label>
        <Input
          type="date"
          {...register(`experiences.${index}.endDate`)}
          disabled={item.current} // Disable end date if currently working
        />
      </FormGroup>

      {/* Checkbox for currently working status */}
      <FormGroup>
        <Label>
          <input
            type="checkbox"
            {...register(`experiences.${index}.current`)}
          />
          Currently Working Here
        </Label>
      </FormGroup>

      {/* Button to remove the experience entry */}
      <Button type="button" onClick={() => remove(index)}>
        Remove Experience
      </Button>
    </ExperienceContainer>
  );
};

// Define PropTypes for type-checking the component props
ExperienceEntry.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ExperienceEntry;
