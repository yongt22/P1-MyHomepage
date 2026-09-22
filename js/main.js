const journeyButtons = document.querySelectorAll(".journey-button");
const journeyTitle = document.querySelector("#journey-title");
const journeyDescription = document.querySelector("#journey-description");

// Add event listeners to each journey button
for (let i = 0; i < journeyButtons.length; i++) {
  journeyButtons[i].addEventListener("click", () => {
    const country = journeyButtons[i].dataset.country;
    if (country === "malaysia") {
      journeyTitle.textContent = "Malaysia Journey";
      journeyDescription.textContent =
        "I began my professional career in Malaysia as a Software Engineer and later worked as an Application Development Engineer. During this stage of my career, I developed software applications and financial system modules, building a strong foundation in software development and business applications.";
    } else if (country === "singapore") {
      journeyTitle.textContent = "Singapore Journey";
      journeyDescription.textContent =
        "I moved to Singapore in 2007, where my career expanded from software development into ERP consulting, project management and business analysis. I worked on Microsoft Dynamics GP implementations and later supported regional ERP projects, gaining experience in requirements analysis, data migration, user acceptance testing and working with clients and business users.";
    } else if (country === "usa") {
      journeyTitle.textContent = "USA Journey";
      journeyDescription.textContent =
        "I moved to the United States in 2016 and continued developing my career in financial and business systems. My work has included ERP implementation and support, process improvement, data analytics, regulatory compliance and working with business and technical teams. I currently work as a Senior IT Systems Analyst while continuing to develop my technical knowledge through graduate study.";
    }
  });
}
