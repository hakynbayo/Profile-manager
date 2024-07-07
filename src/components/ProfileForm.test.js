import { render, screen, fireEvent, test } from "@testing-library/react";
import { expect } from "chai";
import { useForm, FormProvider } from "react-hook-form";
import ProfileForm from "../components/profile/ProfileForm";
import { jest } from "@jest/globals";

const RenderWithFormProvider = (ui, { defaultValues = {} } = {}) => {
  const methods = useForm({ defaultValues });
  return render(<FormProvider {...methods}>{ui}</FormProvider>);
};

test("renders ProfileForm and submits with valid data", () => {
  const onSubmit = jest.fn();
  RenderWithFormProvider(
    <ProfileForm
      register={() => {}}
      handleSubmit={onSubmit}
      control={{}}
      errors={{}}
      fields={[]}
      append={() => {}}
      remove={() => {}}
      handleResumeUpload={() => {}}
    />
  );

  // Check if the form fields are rendered
  expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(
    screen.getByLabelText(/professional experiences/i)
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/skills/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/upload resume/i)).toBeInTheDocument();

  // Fill the form and submit
  fireEvent.change(screen.getByLabelText(/full name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: "john@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/upload resume/i), {
    target: {
      files: [new File(["resume"], "resume.pdf", { type: "application/pdf" })],
    },
  });

  fireEvent.click(screen.getByRole("button", { name: /save profile/i }));

  expect(onSubmit).toHaveBeenCalled();
});
