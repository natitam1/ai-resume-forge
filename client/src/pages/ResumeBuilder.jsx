import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState({
    _id: "",
    userId: "",
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
    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    setResumeData(resume);
    document.title = resume.title;
  };

  useEffect(() => {
    loadExistingResume();
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to={"/app "}
          className="inline-flex gap-2 items-center transition-all text-slate-500 hover:text-slate-700"
        >
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default ResumeBuilder;
