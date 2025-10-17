import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";

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

  const loadExistingResume = async () => {
    setResumeData(dummyResumeData);
  };

  useEffect(() => {
    loadExistingResume();
  }, []);
  return <div></div>;
};

export default ResumeBuilder;
