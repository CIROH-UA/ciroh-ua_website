import React from 'react';
import clsx from "clsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./bootstrap.min.css";
import "./cta-2.css";
import "./cta-1.css";
import styles from "./styles.module.css";
import "./whyDocuhub.css";
import Link from '@docusaurus/Link';
import ResearcherTestimonials from './testimonial';
import TeamMembers from './teamMembers';



const ImpactItem = ({ title, count, imageSrc, users }) => (
  <div className={styles.impactItem}>
    <img src={imageSrc} alt={`${title} icon`} className={styles.impactIcon} />
    <h2 className={styles.impactTitle}>{title}</h2>
    <p className={styles.impactCount}>{count}</p>
    <p className={styles.impactCount}>{users} active users</p>
  </div>
);

const SponsorList = [
  {
    name: "NOAA",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/04/noaa-emblem-rgb-2022-1-150x150.png",
    link: "https://www.noaa.gov/",
    width: "120",
    height: "120",
  },
  {
    name: "USGS",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/04/USGS_logo_green-1.png",
    link: "https://www.usgs.gov/",
    width: "200",
    height: "80",
  },
  {
    name: "2I2C",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/04/2i2c_logo-150x150.png",
    link: "https://2i2c.org/",
    width: "120",
    height: "120",
  },
  {
    name: "Lynker",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/04/Lynker-no-tag.png",
    link: "https://lynker.com/",
    width: "200",
    height: "80",
  },
];
const MemberList = [
  {
    name: "Utah State University",
    logo: "https://i.pinimg.com/originals/96/65/d4/9665d4322a25b6a2ff8cc4f31a178749.png",
    link: "https://uwrl.usu.edu/",
    width: "210",
    height: "100",
  },
  {
    name: "The University of Vermont",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/UVMLogoSolid7484stacked-300x124.png",
    link: "https://www.uvm.edu/ciroh/",
    width: "210",
    height: "70",
  },
  {
    name: "University of Utah",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/University_of_Utah_horizontal_logo.svg/1280px-University_of_Utah_horizontal_logo.svg.png",
    link: "https://www.civil.utah.edu/",
    width: "210",
    height: "70",
  },

  {
    name: "The University of Alabama in Huntsville",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/UAH_primary-300x159.png",
    link: "https://www.itsc.uah.edu/home/projects/adapt-precipitation-super-resolution-and-data-fusion-deep-learning-techniques-operational-flood-forecasting",
    width: "190",
    height: "130",
  },
  {
    name: "University of California San Diego",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/UCSD-SIO_Vertical-Color_RGB.png",
    link: "https://cw3e.ucsd.edu/",
    width: "190",
    height: "75",
  },

  {
    name: "University of Arizona",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/ua_stack_rgb_4_0-300x281.png",
    link: "https://www.arizona.edu/",
    width: "105",
    height: "95",
  },
  {
    name: "University of Hawai'i at Mānoa",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/bottom-300x151.png",
    link: "https://manoa.hawaii.edu/",
    width: "190",
    height: "100",
  },

  {
    name: "University of Iowa",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/Block-IOWA-GOLD-ffcd00-1024x512.png",
    link: "https://www.uiowa.edu/",
    width: "160",
    height: "80",
  },

  {
    name: "University of Saskatchewan",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/usask_usask_colour-300x67.png",
    link: "https://water.usask.ca/",
    width: "190",
    height: "50",
  },
  {
    name: "University of Alabama",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/A-Square-Logo-4c_Official-300x300.jpg",
    link: "https://www.ua.edu/",
    width: "70",
    height: "70",
  },

  {
    name: "University of Minnesota",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/UMN_M-wdmk-stack-D2D-maroon-blk-300x237.png",
    link: "https://environment.umn.edu/",
    width: "170",
    height: "120",
  },
  {
    name: "Tuskegee University",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/tu_logo_OPTION-300x225.png",
    link: "https://www.tuskegee.edu/",
    width: "100",
    height: "100",
  },

  {
    name: "Bringham Young University",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/byu-wordmark-blue-300x191.png",
    link: "https://www.byu.edu/",
    width: "180",
    height: "100",
  },
  {
    name: "Colorado School Of Mines",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/Mines-Stacked_1Color-blue-260x300.png",
    link: "https://ciroh.mines.edu/",
    width: "100",
    height: "120",
  },
];

const PartnerList = [
  {
    name: "Baron Weather",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/Baron-Logo_BlackVertical_2022-269x300.png",
    link: "https://baronweather.com/",
    width: "80",
    height: "105",
  },
  {
    name: "Oak Ridge National Laboratory",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/ORNL-Two-line_green-300x72.png",
    link: "https://www.ornl.gov/",
    width: "190",
    height: "50",
  },

  {
    name: "Dauphin Island Sea Lab",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/DISL-centered-logo-Tag-300x183.png",
    link: "https://www.disl.edu/",
    width: "200",
    height: "120",
  },
  {
    name: "Jupiter Intelligence",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/Jupiter_Logo_Color-300x86.png",
    link: "https://www.jupiterintel.com/",
    width: "190",
    height: "50",
  },

  {
    name: "RTI International",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/RTI_logo_rgb_1in-300x188.png",
    link: "https://www.rti.org/centers/rti-center-water-resources",
    width: "190",
    height: "100",
  },
  {
    name: "CUAHSI",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/new-logo-with-black-text-300x79.png",
    link: "https://www.cuahsi.org/",
    width: "190",
    height: "60",
  },
  {
    name: "Stevens Institute Of Technology",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/Stevens-Primary-logo_4C-RGB-262x300.png",
    link: "https://www.stevens.edu/",
    width: "126",
    height: "140",
  },
  {
    name: "Gulf Of Mexico Costal Ocean Observing System",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/GCOOS-logo-01-landscape-colors-300x188.png",
    link: "https://gcoos.org/",
    width: "150",
    height: "100",
  },
  {
    name: "New Mexico State University",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/NMSU_NoU-Crimson-266x300.png",
    link: "https://nmsu.edu/",
    width: "80",
    height: "100",
  },
  {
    name: "Penn State University",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/PS_HOR_PMS_287_284-300x99.png",
    link: "https://www.psu.edu/",
    width: "190",
    height: "70",
  },

  {
    name: "University of Southern California",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/usc_logo_centered_RGB_G-300x147.png",
    link: "https://sc.edu/",
    width: "170",
    height: "80",
  },
  {
    name: "UC Davis",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/ucdavis_logo_blue-300x52.png",
    link: "https://www.ucdavis.edu/",
    width: "190",
    height: "35",
  },
  {
    name: "Coastal Carolina University",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/ccu_stck_cmyk_2clr-300x257.png",
    link: "https://www.coastal.edu/index.php",
    width: "100",
    height: "90",
  },
  {
    name: "University of Illinois Urbana-Champaign",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/University-Wordmark-Full-Color-RGB-300x78.png",
    link: "https://illinois.edu/",
    width: "180",
    height: "50",
  },
];

const Member = ({ idx, name, logo, link, width, height }) => (
  <div className="col col--6">
    <div className="avatar">
      <div className="avatar__intro">
        <div key={idx} className={styles.imagecontainer}>
          <Link to={link} target="_blank" rel="noreferrer">
            <img
              src={logo}
              alt={name}
              width={width}
              height={height}
              className="img-fluid align-center"
            />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Card = ({ title, image, description, link }) => (
  <div className="col col--4" style={{ display: "flex", marginBottom: "20px" }}>
    <div className="card" style={{ flex: "1" }}>
      <div className="card__image" style={{ textAlign: "center" }}>
        <img
          src={image}
          alt="Image alt text"
          title="Logo Title Text 1"
          style={{ width: "65%" }}
        />
      </div>
      <div className="card__header" style={{ textAlign: "center" }}>
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <Link to={link} className="button button--info button--block">
          Learn More
        </Link>
      </div>
    </div>
  </div>
);

const impactData = [
  {
    title: "CIROH AWS Projects",
    count: 24,
    imageSrc: "/img/logos/corp/aws-black.svg",
    users: 60,
  },
  {
    title: "CIROH Google Cloud and CIROH-2i2c JupyterHub Projects",
    count: 50,
    imageSrc: "/img/logos/corp/google-cloud.jpg",
    users: 171,
  },
  {
    title: "CIROH On-premise HPC Projects",
    count: 20,
    imageSrc: "/img/logos/pantarhei.jpg",
    users: 50,
  },
  {
    title: "CIROH NSF ACCESS Allocations Projects",
    count: 8,
    imageSrc: "/img/logos/nsf-logo.png",
    users: 27,
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.homepageContainer}>
      <div className="container">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          stopOnHover={false}
          useKeyboardArrows={true}
          emulateTouch={true}
          interval={3500}
          infiniteLoop
          showStatus={false}
          showIndicators={true}
        >
          <div className="row">
            <Card
              title="Documentation"
              image="img/graphics/documentation.png"
              description="Dive into our comprehensive documentation to access in-depth information about various CIROH products, including but not limited to NextGen, Snow model, Tethys, and more."
              link="/docs/products/intro"
            />
            <Card
              title="Cloud Services"
              image="img/graphics/cloud.png"
              description="Explore our array of cloud services and offerings, where you can delve into the specifics of CIROH-AWS cloud. Learn how to gain access to this cloud infrastructure and uncover insights into working seamlessly with the 2i2c cloud services."
              link="/docs/services/intro"
            />
            <Card
              title="Policies"
              image="img/graphics/tutorial.png"
              description="Discover recommendations and best practices for CIROH's research, projects, and infrastructure."
              link="/docs/policies/intro"
            />
          </div>
          <div className="row">
            <Card
              title="NextGen In A Box"
              image="img/logos/ngiab.png"
              description="Utilize NextGen In A Box (NGIAB) to locally run NextGen framework. Choose specific regions or basins for analysis, control input data, and modify confiurations, all within a containerized environment."
              link="/docs/products/ngiab/distributions/ngiab-docker"
            />
            <Card
              title="AWS"
              image="img/logos/corp/aws-circle.png"
              description="Leverage the power of CIROH AWS Account to elevate your hydrological research. Get access to enterprise-level AWS cloud platform, and utilize AWS computing resources and scalable storage for your research."
              link="/docs/services/cloudservices/aws"
            />
            <Card
              title="Google Cloud"
              image="img/logos/corp/google-cloud.jpg"
              description="Explore different services and tools offered by CIROH Google Cloud. Learn how to access Google Cloud Platform (GCP) and leverage its resources for your research and projects."
              link="/docs/services/cloudservices/google-cloud"
            />
          </div>
          <div className="row">
            <Card
              title="CIROH-2i2c JupyterHub"
              image="img/logos/corp/jupyterhub.jpg"
              description="Access cloud-based JupyterHub environment on Google Cloud tailored for hydrological research. Leverage computing power with both CPU and GPU capabilities for advanced computational needs."
              link="/docs/services/cloudservices/2i2c"
            />
            <Card
              title="Pantarhei"
              image="img/logos/pantarhei.jpg"
              description="Access Pantarhei, a high-performance computing (HPC) cluster, to run computationally intensive hydrological models. Utilize Pantarhei to perform large-scale simulations and data processing tasks."
              link="/docs/services/on-prem/Pantarhei"
            />
            <Card
              title="CIROH Portal"
              image="img/graphics/ciroh-synergy.jpg"
              description="This portal enhances collaboration and innovation by providing access to interactive web apps, datasets, and learning modules, supporting CIROH and NOAA NWM researchers in advancing hydrological science."
              link="https://portal.ciroh.org/"
            />
          </div>
        </Carousel>
      </div>

      <div className={clsx("hero hero--secondary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.flexStart}>
            <div className="hero-text">
              <h1 className={styles.h1}>CONTRIBUTE</h1>
              <br />
              <p className={styles.heroText}>
                We would like CIROH Consortium members to contribute to CIROH
                DocuHub. Please contribute by adding product/project
                documentation, tutorials, training data, or conference
                presentations. The CIROH DocuHub repository provides a
                collaborative platform for sharing technical
                documentation for projects.{" "}
                <strong>
                  Learn more about how you can contribute and access the CIROH
                  DocuHub repository here:
                </strong>
              </p>
              <br />

              <div className={styles.flexStart}>
                <Link
                  className={`button button--info ${styles.col4}`}
                  to="/contribute"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  How to Contribute?
                </Link>
                <Link
                  className={`button button--secondary ${styles.col4}`}
                  to="https://forms.office.com/r/5ww7qRWwwf"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Your Feedback Matters
                </Link>
              </div>
            </div>
            <img
              src="./img/graphics/contribute.png"
              alt="Contribute to CIROH DocuHub"
              class={styles.heroimage}
            />
          </div>
        </div>
      </div>

      <section className="padded-page-section-feature" id="services">
            <div className="container-feature">
                <h2 className="text-center-feature mt-0">Why DocuHub? Elevate Your Research Journey</h2>
                <hr className="divider-feature" />
                <div className="row-feature ">
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">Knowledge Hub</h3>
                            <img src="img/graphics/why-docuhub-1.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Access a centralized repository of research and educational resources to enhance your hydrological expertise.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">Research & Growth</h3>
                            <img src="img/graphics/why-docuhub-2.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Explore cutting-edge research and innovative projects driving innovation in hydrology.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">Blog & News</h3>
                            <img src="img/graphics/why-docuhub-3.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Stay updated with the latest news, community insights, and updates about CIROH projects.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">Education & Training</h3>
                            <img src="img/graphics/why-docuhub-4.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Elevate your skills with tutorials, training programs, and educational materials tailored for hydrological research.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">CyberInfrastructure</h3>
                            <img src="img/graphics/why-docuhub-5.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Leverage cloud infrastuctures, including AWS, GCP, CIROH-2i2c JupyterHub, and on-premises infrastructures tailored to hydrological research needs.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">Global Collaboration</h3>
                            <img src="img/graphics/why-docuhub-6.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Join a global network of researchers and collaborators to share knowledge, resources, and innovations within the CIROH community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <TeamMembers />
         <ResearcherTestimonials />
      <section
      className={`bsb-cta-2 py-5 ${styles.features}`}
      style={{
        width: "100%", // Ensure the section spans the full width
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding if necessary
      }}
    >
      <div
        className="card rounded-3 overflow-hidden text-center bsb-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('./img/graphics/research-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "local",
          width: "100%", // Ensure the card spans the full width
          margin: 0, // Remove default margin
          padding: 0, // Remove default padding if necessary
          "--bsb-overlay-opacity": ".9",
          "--bsb-overlay-bg-color": "var(--bs-primary-rgb)",
        }}
      >
        <div className="card-body">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-10 col-xl-8 col-xxl-7">
              <h1 className="h5 mb-4 text-white text-uppercase">Our Research</h1>
              <h2 className="display-4 text-white mb-5">
                Our research focuses on advancing hydrological science through
                innovative research, collaboration, and technology development.
              </h2>
              <Link
                to="https://ciroh.ua.edu/research/"
                className={`button button--secondary ${styles.col6}`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

      <div className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.flexStart}>
            <div className="hero-text">
              <h1 className={styles.h1}>Cyberinfrastructure & Community NextGen Monthly Office Hours</h1>
              <br />

              <Link
                className={`button button--secondary ${styles.col4}`}
                href="/docs/products/ngiab/office-hours"
                style={{ textDecoration: "none", marginRight: "10px" }}
              >
                Learn More
              </Link>
            </div>
            <img
              src="./img/graphics/infra.png"
              alt="DocuHub Office Hours"
              class={styles.heroimage}
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ width: "100%" }}>
        <div className={styles.logoBackground}>
          <div className="container-fluid">
            <div className="col col--12">
              <div className={styles.heading}>Consortium Sponsors</div>
              <div className={styles.flexListContainer}>
                { SponsorList.map(sponsor => 
                  <Link to={sponsor.link} className={styles.sponsorwrapper} align="center">
                    <img
                      className={styles.sponsorcontainer}
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={sponsor.width}
                      height={sponsor.height}
                    />
                  </Link>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className={styles.heading}>Consortium Members</div>
                <div className={styles.flexListContainer}>
                  { MemberList.map(member => 
                    <Link to={member.link} className={styles.imagewrapper} align="center">
                      <img
                        className={styles.imagecontainer}
                        src={member.logo}
                        alt={member.name}
                        width={member.width}
                        height={member.height}
                      />
                    </Link>
                  )}
                </div>
              </div>

              <div className="col">
                <div className={styles.heading}>Consortium Partners</div>
                <div className={styles.flexListContainer}>
                  { PartnerList.map(partner => 
                    <Link to={partner.link} className={styles.imagewrapper} align="center">
                      <img
                        className={styles.imagecontainer}
                        src={partner.logo}
                        alt={partner.name}
                        width={partner.width}
                        height={partner.height}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.longwrapper}>
            <div style={{ textAlign: "center" }}>
              <img
                alt="noaaImage"
                src="img/logos/noaa.png"
                style={{ maxHeight: '145px', width: 'auto', padding: '1rem' }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                alt="awiImage"
                src="img/logos/awi.png"
                style={{ maxHeight: '70px', width: 'auto', padding: '1rem' }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                alt="cirohImage"
                src="img/logos/ciroh-light.png"
                style={{ maxHeight: '145px', width: 'auto', padding: '1rem' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
