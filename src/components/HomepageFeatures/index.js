import React from "react";
import styles from "./styles.module.css";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";

// Initialize Font Awesome library
// library.add(fab);

const FeatureList = [
];
const SponserList = [
  {
    name: "NOAA",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/04/noaa-emblem-rgb-2022-1-150x150.png",
    link: "https://www.noaa.gov/",
    width: "100",
    height: "100",
  },
  {
    name: "USGS",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/04/USGS_logo_green-1.png",
    link: "https://www.usgs.gov/",
    width: "150",
    height: "100",
  },
  {
    name: "2I2C",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/04/2i2c_logo-150x150.png",
    link: "https://2i2c.org/",
    width: "120",
    height: "110",
  },
  {
    name: "Lynker",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/04/Lynker-no-tag.png",
    link: "https://lynker.com/",
    width: "150",
    height: "90",
  },
  
];
const MemberList = [
  {
    name: "Tuskegee University",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/tu_logo_OPTION-300x225.png",
    link: "https://www.tuskegee.edu/",
    width: "100",
    height: "100",
  },
  {
    name: "University of California San Diego",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/UCSD-SIO_Vertical-Color_RGB.png",
    link: "https://cw3e.ucsd.edu/",
    width: "150",
    height: "75",
  },
  {
    name: "The University of Alabama in Huntsville",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/UAH_primary-300x159.png",
    link: "https://www.itsc.uah.edu/home/projects/adapt-precipitation-super-resolution-and-data-fusion-deep-learning-techniques-operational-flood-forecasting",
    width: "160",
    height: "150",
  },
  {
    name: "University of Arizona",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/ua_stack_rgb_4_0-300x281.png",
    link: "https://www.arizona.edu/",
    width: "75",
    height: "75",
  },
  {
    name: "University of Iowa",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/Block-IOWA-GOLD-ffcd00-1024x512.png",
    link: "https://www.uiowa.edu/",
    width: "150",
    height: "80",
  },
  {
    name: "University of Hawai'i at Mānoa",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/bottom-300x151.png",
    link: "https://manoa.hawaii.edu/",
    width: "150",
    height: "80",
  },
  {
    name: "University of Saskatchewan",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/usask_usask_colour-300x67.png",
    link: "https://water.usask.ca/",
    width: "150",
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
    width: "150",
    height: "120",
  },

  {
    name: "University of Utah",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/Ulogo_RGB.jpg",
    link: "https://www.civil.utah.edu/",
    width: "130",
    height: "80",
  },
  {
    name: "Bringham Young University",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/byu-wordmark-blue-300x191.png",
    link: "https://www.byu.edu/",
    width: "120",
    height: "100",
  },
  {
    name: "Colorado School Of Mines",
    logo: "https://ciroh.ua.edu/wp-content/uploads/2023/03/Mines-Stacked_1Color-blue-260x300.png",
    link: "https://ciroh.mines.edu/",
    width: "80",
    height: "80",
  },
];

const PartnerList=[
  {
    name:"Baron Weather",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/Baron-Logo_BlackVertical_2022-269x300.png",
    link: "https://baronweather.com/",
    width: "75",
    height: "75",

  },
  {
    name:"Coastal Carolina University",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/ccu_stck_cmyk_2clr-300x257.png",
    link: "https://www.coastal.edu/index.php",
    width: "100",
    height: "90",

  },
  
  {
    name:"Dauphin Island Sea Lab",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/DISL-centered-logo-Tag-300x183.png",
    link: "https://www.disl.edu/",
    width: "150",
    height: "120",

  },
  {
    name:"Gulf Of Mexico Costal Ocean Observing System",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/GCOOS-logo-01-landscape-colors-300x188.png",
    link: "https://gcoos.org/",
    width: "150",
    height: "100",

  },
  {
    name:"Jupiter Intelligence",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/Jupiter_Logo_Color-300x86.png",
    link: "https://www.jupiterintel.com/",
    width: "150",
    height: "50",

  },
  {
    name:"CUAHSI",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/new-logo-with-black-text-300x79.png",
    link: "https://www.cuahsi.org/",
    width: "150",
    height: "40",

  },
  {
    name:"RTI International",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/RTI_logo_rgb_1in-300x188.png",
    link: "https://www.rti.org/centers/rti-center-water-resources",
    width: "150",
    height: "120",

  },
  {
    name:"Stevens Institute Of Technology",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/Stevens-Primary-logo_4C-RGB-262x300.png",
    link: "https://www.stevens.edu/",
    width: "100",
    height: "100",

  },
  {
    name:"New Mexico State University",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/NMSU_NoU-Crimson-266x300.png",
    link: "https://nmsu.edu/",
    width: "75",
    height: "75",

  },
  {
    name:"Penn State University",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/PS_HOR_PMS_287_284-300x99.png",
    link: "https://www.psu.edu/",
    width: "150",
    height: "70",

  },
  {
    name:"UC Davis",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/ucdavis_logo_blue-300x52.png",
    link: "https://www.ucdavis.edu/",
    width: "150",
    height: "40",

  },
  
  {
    name:"University of Southern California",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/usc_logo_centered_RGB_G-300x147.png",
    link: "https://sc.edu/",
    width: "160",
    height: "70",

  },
  {
    name:"Oak Ridge National Laboratory",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/ORNL-Two-line_green-300x72.png",
    link: "https://www.ornl.gov/",
    width: "170",
    height: "50",

  },
  {
    name:"University of Illinois Urbana-Champaign",
    logo:"https://ciroh.ua.edu/wp-content/uploads/2023/03/University-Wordmark-Full-Color-RGB-300x78.png",
    link: "https://illinois.edu/",
    width: "150",
    height: "50",

  },
];

const Member = ({ idx, name,logo,link,width,height }) => (
  <div className="col col--6">
    <div className="avatar">
      <div className="avatar__intro">
        <div
          key={idx}
          className={styles.imagecontainer}>
          
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
  <div className="col col--4">
    <div className="card">
      <div className="card__image" style={{ textAlign: 'center' }}>
        <img
          src={image}
          alt="Image alt text"
          title="Logo Title Text 1"
          style={{width:'65%'}}
        />
      </div>
      <div className="card__header"  style={{ textAlign: 'center' }}>
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
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

        <div className="row" style={{ paddingTop: 30 }}>
          <div
            className="flex-container alert alert--info"
            style={{ display: "flex" }}
          >
            <div>
              <img
                src="img/docuhub-logo.png"
                style={{ maxWidth: "40%" }}
                alt="Logo"
              />
            </div>
            <div style={{'padding-top':'5px', 'margin-left':'-175px'}}>
              <strong>CONTRIBUTE</strong>
              <br />
              
              We would like CIROH Consortium members to contribute to CIROH DocuHub. Please contribute by adding  product/project documentation, tutorials, training data, or conference presentations.  <br />
              The CIROH DocuHub repository provides a collaborative platform for sharing project's technical documentation. <strong>Learn more about how you can contribute and access the CIROH DocuHub repostitory here:</strong>
         
              {" "}
              <br />
              <br />
              
              
              <a className="button button--info" href="/Contribute" style={{ textDecoration: 'none', marginRight: '20px' }}>
                How to Contribute?
              </a>
              <a className="button button--info button--outline" href="https://github.com/CIROH-UA/ciroh-ua_website" style={{ textDecoration: 'none', marginRight: '20px' }}>
                GitHub Repo 
              </a>

            </div>
          </div>
        </div>
    <div className={styles.logocontainer}>
        <div>
        <h1 className={styles.heading1}>Consortium Sponsors</h1>
            <div className={styles.flexcontainer2}>
                {SponserList.map((member, idx) => (
                  <Member 
                    key={idx}
                    idx={idx}
                    name={member.name}
                    logo={member.logo}
                    width={member.width}
                    height={member.height}
                    link={member.link} />
                ))}
          </div>
          </div>
        <div className={styles.flexcontainer1}>
            <div>
            <h1 className={styles.heading1}>Consortium Members</h1>
            <div className="row" style={{width:"100%"}} >
                {MemberList.map((member, idx) => (
                  <Member 
                    key={idx}
                    idx={idx}
                    name={member.name}
                    logo={member.logo}
                    width={member.width}
                    height={member.height}
                    link={member.link} />
                ))}
            </div>
            </div>
            <div>
            <h1 className={styles.heading1}>Consortium Partners</h1>
            <div className="row">
                {PartnerList.map((member, idx) => (
                  <Member 
                    key={idx}
                    idx={idx}
                    name={member.name}
                    logo={member.logo}
                    width={member.width}
                    height={member.height}
                    link={member.link} />
                ))}
            </div>
          </div>
            
              
              
              
              
            
        </div>
        </div>

        <div className="row" style={{ paddingTop: 30 }}>
          <div className="col col--4" style={{ textAlign: "center" }}>
            <img alt="noaaImage" src="img/noaalogo.png" />
          </div>
          <div className="col col--4" style={{ textAlign: "center" }}>
            <img alt="awiImage" src="img/awi.png" style={{ marginTop: 125 }} />
          </div>
          <div className="col col--4" style={{ textAlign: "center" }}>
            <img
              alt="cirohImage"
              src="img/cirohlogo-trans.png"
              style={{ height: 275, width: 275, marginTop: 15 }}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
