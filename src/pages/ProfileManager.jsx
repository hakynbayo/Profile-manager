import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import styled from "styled-components";
import Layout from "../components/Layout";
// import Select from "react-select";
import ProfileForm from "../components/profile/ProfileForm";
import ProfileSummary from "../components/profile/ProfileSummary";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  color: #007bff;
  padding: 3.4rem;
  background-color: #eeeeee;
  border-radius: 0.8rem;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap:2rem;
    padding: 1rem;
    width:100%;
  }

  @media (max-width: 480px) {
    padding: 0.7rem;
    width:90%;
    gap:2rem;
  }
`;

const ProfileManager = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });
  const [resume, setResume] = useState(null);
  const [, setResumeError] = useState("");
  const [profile, setProfile] = useState(null);

  const onSubmit = (data) => {
    setProfile({
      ...data,
      resume: resume,
      resumeUrl: URL.createObjectURL(resume),
      skills: data.skills.map((skill) => skill.label).join(", "),
    });
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (file && allowedTypes.includes(file.type)) {
      setResume(file);
      setResumeError("");
    } else {
      setResume(null);
      setResumeError("Please upload a PDF or DOCX file.");
    }
  };

  return (
    <Layout>
      <Container>
        <ProfileForm
          register={register}
          handleSubmit={handleSubmit}
          control={control}
          errors={errors}
          fields={fields}
          append={append}
          remove={remove}
          handleResumeUpload={handleResumeUpload}
          onSubmit={onSubmit}
        />
        {profile && <ProfileSummary profile={profile} />}
      </Container>
    </Layout>
  );
};

export default ProfileManager;
