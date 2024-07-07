import { render, screen, test } from "@testing-library/react";
import { expect } from "chai";
import ProfileSummary from "../components/profile/ProfileSummary";

const profile = {
  fullName: "John Doe",
  email: "john@example.com",
  experiences: "Software Developer at XYZ Corp",
  skills: "JavaScript, React",
  resume: new File(["resume"], "resume.pdf", { type: "application/pdf" }),
};

test("renders ProfileSummary with profile data", () => {
  render(<ProfileSummary profile={profile} />);

  expect(screen.getByText(/name:/i)).toHaveTextContent("Name: John Doe");
  expect(screen.getByText(/email:/i)).toHaveTextContent(
    "Email: john@example.com"
  );
  expect(screen.getByText(/experiences:/i)).toHaveTextContent(
    "Experiences: Software Developer at XYZ Corp"
  );
  expect(screen.getByText(/skills:/i)).toHaveTextContent(
    "Skills: JavaScript, React"
  );
  expect(screen.getByText(/resume:/i)).toHaveTextContent("Resume: resume.pdf");
});

test("renders link to view resume", () => {
  render(<ProfileSummary profile={profile} />);

  const resumeLink = screen.getByText(/view resume/i);
  expect(resumeLink).toBeInTheDocument();
  expect(resumeLink.closest("a")).toHaveAttribute(
    "href",
    expect.stringContaining("blob:")
  );
});
