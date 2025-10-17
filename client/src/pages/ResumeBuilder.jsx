import React, { useState } from "react";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3b82f6",
    public: false,
  });
  return <div></div>;
};

export default ResumeBuilder;
