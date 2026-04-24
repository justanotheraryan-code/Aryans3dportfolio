import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder's Office Intern</h4>
                <h5>Masters' Union</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Redesigned the NPS framework as a feedback product, mapping touchpoints
              across the student lifecycle. Built internal data products for top
              management using Claude Code, Power BI and Excel — translating raw
              operational data into actionable decision dashboards. Managed CXO and
              high-profile visitor relations on behalf of leadership.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PGP — Technology & Business</h4>
                <h5>Masters' Union · Gurugram</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Post Graduate Program in Technology and Business Management (YLC).
              Co-President of the Debating Society of MU. Top 8 Finalist at national
              case competitions across IIT Jammu, IMT Ghaziabad, SIBM Pune, XLRI
              Jamshedpur, IIT Mumbai, and BITS Pilani.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Development</h4>
                <h5>Tesla Power USA · Gurugram</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built a supply chain framework and mapped client acquisition pipelines.
              Optimised vendor engagement workflows and closed 8+ renewable energy
              clients by testing and iterating outreach strategies based on
              stakeholder response patterns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCom (Honours)</h4>
                <h5>NMIMS Mumbai</h5>
              </div>
              <h3>2021–24</h3>
            </div>
            <p>
              Commerce at Anil Surendra Modi School of Commerce, NMIMS. Awarded
              Excellence in Co-Curriculars — Top 3 in 1000+ students for consistent
              leadership. Co-President of the Social Responsibility Forum, Korean
              International Debate Championship Runner-Up, and Debater General.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
