import React from "react";
import Layout from "../components/Layout";

function Jobs() {
  return (
    <Layout>
      <div className="container mx-auto px-24 py-32 md:px-8 md:py-48 sm:px-8 sm:py-48">
          <div>
            Jobs
            <button className="btn btn-solid">Submit a Job</button>
          </div>
          <div>
            Filter by: <br/>
            Role: All, Software Development, Design, Copywriting, Writing <br/>
            Location: All, Remote, Malaysia <br/>
            Sort by: Recent first
          </div>
          <div>
            Company Image: <br/>
            Job title: <br/>
            Company Name: <br/>
            Location: <br/>
            Tagging: (eg. Design)<br/>
            Time posted: <br/>
            Featured: Yes/No <br/>
            Apply CTA <br/>
          </div>
      </div>
    </Layout>
  );
}

export default Jobs