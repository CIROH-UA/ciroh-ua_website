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
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";

// Initialize Font Awesome library
// library.add(fab);
const ImpactItem = ({ title, count, imageSrc, users }) => (
  <div className={styles.impactItem}>
    <img src={imageSrc} alt={`${title} icon`} className={styles.impactIcon} />
    <h2 className={styles.impactTitle}>{title}</h2>
    <p className={styles.impactCount}>{count}</p>
    <p className={styles.impactCount}>{users} active users</p>
  </div>
);

const FeatureList = [];
const SponserList = [
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
          <a href={link} target="_blank" rel="noreferrer">
            <img
              src={logo}
              alt={name}
              width={width}
              height={height}
              className="img-fluid align-center"
            />
          </a>
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
        <a href={link} className="button button--info button--block">
          Learn More
        </a>
      </div>
    </div>
  </div>
);

const impactData = [
  {
    title: "CIROH AWS Projects",
    count: 24,
    imageSrc: "/img/aws-logo.svg",
    users: 60,
  },
  {
    title: "CIROH Google Cloud and CIROH JupyterHub Projects",
    count: 50,
    imageSrc: "/img/google-cloud.jpg",
    users: 171,
  },
  {
    title: "CIROH On-premise HPC Projects",
    count: 20,
    imageSrc: "/img/pantarhei-logo.jpg",
    users: 50,
  },
  {
    title: "CIROH NSF ACCESS Allocations Projects",
    count: 8,
    imageSrc: "/img/nsf-logo.png",
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
              image="img/documentation.png"
              description="Dive into our comprehensive documentation to access in-depth information about various CIROH products, including but not limited to NextGen, Snow model, Tethys, and more."
              link="/docs/products/intro"
            />
            <Card
              title="Cloud Services"
              image="img/cloud.png"
              description="Explore our array of cloud services and offerings, where you can delve into the specifics of CIROH-AWS cloud. Learn how to gain access to this cloud infrastructure and uncover insights into working seamlessly with the 2i2c cloud services."
              link="/docs/services/intro"
            />
            <Card
              title="Training"
              image="img/tutorial.png"
              description="Elevate your expertise through our training programs. Delve into our tutorials and educational resources, covering topics such as the NextGen framework, Data Science model, and more."
              link="/docs/education/"
            />
          </div>
          <div className="row">
            <Card
              title="NextGen In A Box"
              image="img/NGIAB-logo.jpg"
              description="Utilize NextGen In A Box (NGIAB) to locally run NextGen framework. Choose specific regions or basins for analysis, control input data, and modify confiurations, all within a containerized environment."
              link="/docs/products/Community%20Hydrologic%20Modeling%20Framework/nextgeninaboxDocker"
            />
            <Card
              title="AWS"
              image="img/aws-logo.png"
              description="Leverage the power of CIROH AWS Account to elevate your hydrological research. Get access to enterprise-level AWS cloud platform, and utilize AWS computing resources and scalable storage for your research."
              link="/docs/services/cloudservices/aws"
            />
            <Card
              title="Google Cloud"
              image="img/google-cloud.jpg"
              description="Explore different services and tools offered by CIROH Google Cloud. Learn how to access Google Cloud Platform (GCP) and leverage its resources for your research and projects."
              link="/docs/services/cloudservices/google cloud"
            />
          </div>
          <div className="row">
            <Card
              title="CIROH JupyterHub"
              image="img/jupyterhub.jpg"
              description="Access cloud-based JupyterHub environment on Google Cloud tailored for hydrological research. Leverage computing power with both CPU and GPU capabilities for advanced computational needs."
              link="/docs/services/cloudservices/CIROH JupyterHub"
            />
            <Card
              title="Pantarhei"
              image="img/pantarhei-logo.jpg"
              description="Access Pantarhei, a high-performance computing (HPC) cluster, to run computationally intensive hydrological models. Utilize Pantarhei to perform large-scale simulations and data processing tasks."
              link="/docs/services/on-prem/Pantarhei"
            />
            <Card
              title="CIROH Portal"
              image="img/ciroh-logo.jpg"
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
                <a
                  className={`button button--primary ${styles.col4}`}
                  href="/contribute"
                  style={{ textDecoration: "none", marginRight: "10px" }}
                >
                  How to Contribute
                </a>
                <a
                  className={`button button--secondary ${styles.col4}`}
                  href="https://forms.office.com/r/5ww7qRWwwf"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Your Feedback Matters
                </a>
              </div>
            </div>
            <img
              src="./img/contribute.png"
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
                            <img src="/img/why-docuhub-1.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Access a centralized repository of research and educational resources to enhance your hydrological expertise.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">Research & Growth</h3>
                            <img src="/img/why-docuhub-2.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Explore cutting-edge research and innovative projects driving innovation in hydrology.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">Blog & News</h3>
                            <img src="/img/why-docuhub-3.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Stay updated with the latest news, community insights, and updates about CIROH projects.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">Education & Training</h3>
                            <img src="/img/why-docuhub-4.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Elevate your skills with tutorials, training programs, and educational materials tailored for hydrological research.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">CyberInfrastructure</h3>
                            <img src="/img/why-docuhub-5.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Leverage cloud infrastuctures, including AWS, GCP, CIROH JupyterHub, and on-premises infrastructures tailored to hydrological research needs.</p>
                        </div>
                    </div>
                    <div className="col-lg-3-feature col-md-6-feature text-center">
                        <div className="mt-5-feature">
                            <h3 className="h4 mb-2-feature">Global Collaboration</h3>
                            <img src="/img/why-docuhub-6.png" alt="docuhub image"></img>
                            <p className="text-muted-feature mb-0 mt-2">Join a global network of researchers and collaborators to share knowledge, resources, and innovations within the CIROH community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
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
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('./img/research-image.jpg')",
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
              <a
                href="https://ciroh.ua.edu/research/"
                className={`button button--secondary ${styles.col6}`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.flexStart}>
            <div className="hero-text">
              <h1 className={styles.h1}><b>NEW!</b> CIROH Office Hours</h1>
              <br />
              
              <Link
                className={`button button--secondary ${styles.col4}`}
                href="/docs/products/Community Hydrologic Modeling Framework/ngiabOfficeHours"
                style={{ textDecoration: "none", marginRight: "10px" }}
              >
                Learn More
              </Link>
            </div>
            <img
              src="./img/infra.png"
              alt="DocuHub Office Hours"
              class={styles.heroimage}
            />
          </div>
        </div>
      </div>
    
      <div className="container" style={{ width: "100%" }}>
        <div className={styles.logoBackground}>
          <div className="container-fluid">
            <div className="row">
              <div className="col col--12">
                <div className="row">
                  <div className="col col--12">
                    <div className={styles.heading}>Consortium Sponsers</div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.col1} align="center">
                    <a href={SponserList[0].link}>
                      <img
                        className={styles.sponserimage}
                        src={SponserList[0].logo}
                        alt={SponserList[0].name}
                        width={SponserList[0].width}
                        height={SponserList[0].height}
                      />
                    </a>
                  </div>
                  <div
                    className={`${styles.flex} ${styles.col1}`}
                    align="center"
                  >
                    <a href={SponserList[1].link}>
                      <img
                        className={`${styles.sponserimage} ${styles.lightImage}`}
                        src={SponserList[1].logo}
                        alt={SponserList[1].name}
                        width={SponserList[1].width}
                        height={SponserList[1].height}
                      />
                       <img
                        className={`${styles.sponserimage} ${styles.darkImage}`}
                        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/USGS_logo.svg/2560px-USGS_logo.svg.png"}
                        alt={SponserList[1].name}
                        width={SponserList[1].width}
                        height={SponserList[1].height}
                      />
                    </a>
                  </div>

                  <div
                    className={`${styles.flex} ${styles.col1}`}
                    align="center"
                  >
                    <a href={SponserList[2].link}>
                    <img
                        className={`${styles.sponserimage} ${styles.darkImage}`}
                        src={"https://2i2c.org/kpis/_static/images/logo.png"}
                        alt={SponserList[2].name}
                        width={SponserList[2].width}
                        height={SponserList[2].height}
                      />
                    <img
                        className={`${styles.sponserimage} ${styles.lightImage}`}
                        src={SponserList[2].logo}
                        alt={SponserList[2].name}
                        width={SponserList[2].width}
                        height={SponserList[2].height}
                      />
                    </a>
                  </div>
                  <div className={styles.col1} align="center">
                    <a href={SponserList[3].link}>
                    <img
                        className={`${styles.sponserimage} ${styles.lightImage}`}
                        src={SponserList[3].logo}
                        alt={SponserList[3].name}
                        width={SponserList[3].width}
                        height={SponserList[3].height}
                      />
                      <img
                        className={`${styles.sponserimage} ${styles.darkImage}`}
                        src={"https://media.licdn.com/dms/image/v2/C5616AQHOWzrClrXOEA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1657224837882?e=2147483647&v=beta&t=t_prAtcAnWVYFnSDKpZhA0yyZqU8PhbHJX7GGtb7rdo"}
                        alt={SponserList[3].name}
                        width={260}
                        height={SponserList[3].height}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <div className={styles.heading}>Consortium Members</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className={styles.row1}>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={MemberList[0].link}>
                        <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[0].logo}
                            alt={MemberList[0].name}
                            width={MemberList[0].width}
                            height={MemberList[0].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Utah_State_University_seal.svg/1200px-Utah_State_University_seal.svg.png"}
                            alt={MemberList[0].name}
                            width={90}
                            height={90}
                          />
                        </a>
                      </div>
                      <div className={styles.col2}>
                        <a href={MemberList[1].link}>
                        <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://www.in-icorps.org/wp-content/uploads/2024/09/UVM-white-resized.png"}
                            alt={MemberList[1].name}
                            width={230}
                            height={70}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[1].logo}
                            alt={MemberList[1].name}
                            width={MemberList[1].width}
                            height={MemberList[1].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={MemberList[2].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://templates.utah.edu/_main-v2/_images/header/logo/uu-logo.png"}
                            alt={MemberList[2].name}
                            width={205}
                            height={80}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[2].logo}
                            alt={MemberList[2].name}
                            width={MemberList[2].width}
                            height={MemberList[2].height}
                          />
                        </a>
                      </div>
                      <div className={styles.col2}>
                        <a href={MemberList[3].link}>
                        <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://www.uah.edu/images/administrative/communications/style-guide/downloads/png/UAH_Horizontal_PNG_bluwht.png"}
                            alt={MemberList[3].name}
                            width={300.51}
                            height={100}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[3].logo}
                            alt={MemberList[3].name}
                            width={MemberList[3].width}
                            height={MemberList[3].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={MemberList[4].link}>
                        <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[4].logo}
                            alt={MemberList[4].name}
                            width={MemberList[4].width}
                            height={MemberList[4].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://www.grantforward.com/sponsor_image/20240508232223_d052f5ca0fe0fb87dc89d7db0e516419.png"}
                            alt={MemberList[4].name}
                            width={390}
                            height={60}
                          />
                        </a>
                      </div>
                      <div className={styles.col2}>
                        <a href={MemberList[5].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[5].logo}
                            alt={MemberList[5].name}
                            width={MemberList[5].width}
                            height={MemberList[5].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://phoenixmed.arizona.edu/sites/default/files/campus/marcomm/brand/master-logo/10-ua-vertical-white/ua_rev_stack_rgb_white.png"}
                            alt={MemberList[5].name}
                            width={MemberList[5].width}
                            height={MemberList[5].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={MemberList[6].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[6].logo}
                            alt={MemberList[6].name}
                            width={MemberList[6].width}
                            height={MemberList[6].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://manoa.hawaii.edu/wp/wp-content/uploads/2017/10/uhm-white-seal-nameplate@2x.png"}
                            alt={MemberList[6].name}
                            width={MemberList[6].width}
                            height={MemberList[6].height}
                          />
                        </a>
                      </div>
                      <div className={styles.col2}>
                        <a href={MemberList[7].link}>
                          <img
                            className={styles.imagecontainer}
                            src={MemberList[7].logo}
                            alt={MemberList[7].name}
                            width={MemberList[7].width}
                            height={MemberList[7].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={MemberList[8].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[8].logo}
                            alt={MemberList[8].name}
                            width={MemberList[8].width}
                            height={MemberList[8].height}
                          />
                           <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://cyberlab.usask.ca/images/usask_logo_black.png"}
                            alt={MemberList[8].name}
                            width={MemberList[8].width}
                            height={MemberList[8].height}
                          />
                        </a>
                      </div>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={MemberList[9].link}>
                          <img
                            className={styles.imagecontainer}
                            src={MemberList[9].logo}
                            alt={MemberList[9].name}
                            width={MemberList[9].width}
                            height={MemberList[9].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={MemberList[10].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[10].logo}
                            alt={MemberList[10].name}
                            width={MemberList[10].width}
                            height={MemberList[10].height}
                          />
                           <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Minnesota_Logo.svg/1280px-University_of_Minnesota_Logo.svg.png"}
                            alt={MemberList[10].name}
                            width={100}
                            height={70}
                          />

                        </a>
                      </div>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={MemberList[11].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[11].logo}
                            alt={MemberList[11].name}
                            width={MemberList[11].width}
                            height={MemberList[11].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://www.tuskegee.edu/Content/Uploads/Tuskegee/Images/f-logo.png"}
                            alt={MemberList[11].name}
                            width={180}
                            height={90}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={MemberList[12].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[12].logo}
                            alt={MemberList[12].name}
                            width={MemberList[12].width}
                            height={MemberList[12].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://upload.wikimedia.org/wikipedia/commons/b/b2/Brigham_Young_University_medallion.svg"}
                            alt={MemberList[12].name}
                            width={100}
                            height={100}
                          />
                        </a>
                      </div>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={MemberList[13].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={MemberList[13].logo}
                            alt={MemberList[13].name}
                            width={MemberList[13].width}
                            height={MemberList[13].height}
                          />
                           <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://images2.teeshirtpalace.com/designs/1711940587680.png?width=700"}
                            alt={MemberList[13].name}
                            width={100}
                            height={130}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <div className={styles.heading}>Consortium Partners</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={PartnerList[0].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[0].logo}
                            alt={PartnerList[0].name}
                            width={PartnerList[0].width}
                            height={PartnerList[0].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://www.baronthreatnet.com/sites/all/themes/barontheme/logo.png"}
                            alt={PartnerList[0].name}
                            width={220}
                            height={70}
                          />
                        </a>
                      </div>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={PartnerList[1].link}>
                          <img
                            className={styles.imagecontainer}
                            src={PartnerList[1].logo}
                            alt={PartnerList[1].name}
                            width={PartnerList[1].width}
                            height={PartnerList[1].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={PartnerList[2].link}>
                          <img
                            className={styles.imagecontainer}
                            src={PartnerList[2].logo}
                            alt={PartnerList[2].name}
                            width={PartnerList[2].width}
                            height={PartnerList[2].height}
                          />
                        </a>
                      </div>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={PartnerList[3].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[3].logo}
                            alt={PartnerList[3].name}
                            width={PartnerList[3].width}
                            height={PartnerList[3].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://global-uploads.webflow.com/63727ffa52be207cf8bb4aca/63bbfa022801849f49386d3d_unnamed%20(2).webp"}
                            alt={PartnerList[3].name}
                            width={PartnerList[3].width}
                            height={PartnerList[3].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={PartnerList[4].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[4].logo}
                            alt={PartnerList[4].name}
                            width={PartnerList[4].width}
                            height={PartnerList[4].height}
                          />
                           <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://ourfragilexworld.org/img/rti-logo-white.png"}
                            alt={PartnerList[4].name}
                            width={PartnerList[4].width}
                            height={PartnerList[4].height}
                          />
                        </a>
                      </div>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={PartnerList[5].link}>
                          <img
                            className={styles.imagecontainer}
                            src={PartnerList[5].logo}
                            alt={PartnerList[5].name}
                            width={PartnerList[5].width}
                            height={PartnerList[5].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={PartnerList[6].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[6].logo}
                            alt={PartnerList[6].name}
                            width={PartnerList[6].width}
                            height={PartnerList[6].height}
                          />
                           <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://cdn.prod.website-files.com/5ba032fa3943f8840d5b914f/5d489b063cf49eac67eabd5a_Stevens-Official-WhiteKO-R.png"}
                            alt={PartnerList[6].name}
                            width={240}
                            height={80}
                          />
                        </a>
                      </div>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={PartnerList[7].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[7].logo}
                            alt={PartnerList[7].name}
                            width={PartnerList[7].width}
                            height={PartnerList[7].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://cdn.ioos.noaa.gov/media/2021/03/gcoos_med.png"}
                            alt={PartnerList[7].name}
                            width={200}
                            height={PartnerList[7].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={PartnerList[8].link}>
                          <img
                            className={styles.imagecontainer}
                            src={PartnerList[8].logo}
                            alt={PartnerList[8].name}
                            width={PartnerList[8].width}
                            height={PartnerList[8].height}
                          />
                        </a>
                      </div>
                      <div className={styles.col2}>
                        <a href={PartnerList[9].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[9].logo}
                            alt={PartnerList[9].name}
                            width={PartnerList[9].width}
                            height={PartnerList[9].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://service.psu.edu/wp-content/themes/genesis-psu/images/PS_HOR_REV_RGB_2C.png"}
                            alt={PartnerList[9].name}
                            width={PartnerList[9].width}
                            height={PartnerList[9].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={PartnerList[10].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[10].logo}
                            alt={PartnerList[10].name}
                            width={PartnerList[10].width}
                            height={PartnerList[10].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://sc.edu/_global_resources/img/usc_logo_horizontal_rgb_g_rev.svg"}
                            alt={PartnerList[10].name}
                            width={280}
                            height={90}
                          />
                        </a>
                      </div>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={PartnerList[11].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[11].logo}
                            alt={PartnerList[11].name}
                            width={PartnerList[11].width}
                            height={PartnerList[11].height}
                          />
                           <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/UC_Davis_wordmark.svg/2560px-UC_Davis_wordmark.svg.png"}
                            alt={PartnerList[11].name}
                            width={PartnerList[11].width}
                            height={PartnerList[11].height}
                          />
                        </a>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.col2}>
                        <a href={PartnerList[12].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[12].logo}
                            alt={PartnerList[12].name}
                            width={PartnerList[12].width}
                            height={PartnerList[12].height}
                          />
                           <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://www.yuja.com/wp-content/uploads/logo-Coastal-Carolina-University.png"}
                            alt={PartnerList[12].name}
                            width={200}
                            height={90}
                          />
                        </a>
                      </div>
                      <div className={`${styles.flex} ${styles.col2}`}>
                        <a href={PartnerList[13].link}>
                          <img
                            className={`${styles.imagecontainer} ${styles.lightImage}`}
                            src={PartnerList[13].logo}
                            alt={PartnerList[13].name}
                            width={PartnerList[13].width}
                            height={PartnerList[13].height}
                          />
                          <img
                            className={`${styles.imagecontainer} ${styles.darkImage}`}
                            src={"https://illinois.edu/assets/img/branding/illinois_primary_wordmark_reversed_orange.svg"}
                            alt={PartnerList[13].name}
                            width={PartnerList[13].width}
                            height={PartnerList[13].height}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={"row"} style={{ paddingTop: 70 }}>
            <div className="col col--4" style={{ textAlign: "center" }}>
              <img
                className={`${styles.imagecontainer} ${styles.lightImage}`}
                alt="noaaImage"
                src="img/noaalogo.png"
                style={{ height: 145, width: 145, marginTop: 15 }}
              />
              <img
                className={`${styles.imagecontainer} ${styles.darkImage}`}
                alt="noaaImage"
                src="img/noaalogo-white.png"
                style={{ height: 145, width: 145, marginTop: 15 }}
              />
            </div>
            <div className="col col--4" style={{ textAlign: "center" }}>
              <img
                className={`${styles.imagecontainer} ${styles.lightImage}`}
                alt="awiImage"
                src="img/awi.png"
                style={{ marginTop: 45, marginBottom: 45 }}
              />
              <img
                className={`${styles.imagecontainer} ${styles.darkImage}`}
                alt="awiImage"
                src="img/awi-white.png"
                style={{ marginTop: 45, marginBottom: 45 }}
              />
            </div>
            <div className="col col--4" style={{ textAlign: "center" }}>
              <img
                className={`${styles.imagecontainer} ${styles.lightImage}`}
                alt="cirohImage"
                src="img/cirohlogo-transparent.png"
                style={{ height: 145, width: 145, marginTop: 15 }}
              />
              <img
                className={`${styles.imagecontainer} ${styles.darkImage}`}
                alt="cirohImage"
                src="img/cirohlogo-white.png"
                style={{ height: 145, width: 145, marginTop: 15 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
