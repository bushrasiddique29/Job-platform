import React from "react";
import "./about.css";
import { Navbar } from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      <div className="about-hero">
        <h1>About Our Job Platform</h1>
        <p>
          A modern platform that connects job seekers with top companies and
          helps employers find the right talent quickly and efficiently.
        </p>
      </div>

      <div className="about-section">
        <h2>🎯 Our Mission</h2>
        <p>
          Our mission is to simplify the hiring process by providing a smart,
          fast, and reliable job portal where opportunities meet talent without
          barriers.
        </p>
      </div>

      <div className="about-section">
        <h2>💼 What We Offer</h2>
        <ul>
          <li>Thousands of verified job listings</li>
          <li>Easy job application process</li>
          <li>Company profiles & reviews</li>
          <li>Resume upload & tracking system</li>
          <li>Admin dashboard for recruiters</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>🚀 Why Choose Us?</h2>
        <p>
          We focus on speed, trust, and simplicity. Whether you are a fresher or
          an experienced professional, we help you find the right opportunity
          faster.
        </p>
      </div>

      <div className="about-footer">
        <h3>Start your career journey today 🚀</h3>
      </div>
    </div>
    </>
  );
};

export default About;