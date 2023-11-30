import React from "react";
import styles from "./styles.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Initialize Font Awesome library
library.add(fab);

const FeatureList = [
];

const MemberList = [
  "The University of Alabama",
  "Brigham Young University",
  "Colorado School of Mines",
  "Tuskegee University",
  "The University of Alabama in Huntsville",
  "University of Arizona",
  "University of California San Diego",
  "Scripps Institution of Oceanography",
  "University of Hawai‘i at Mānoa",
  "University of Iowa",
  "University of Minnesota",
  "Twin Cities",
  "University of Saskatchewan",
  "University of Utah",
  "University of Vermont",
  "Utah State University",
];

const Member = ({ idx, name }) => (
  <div className="col col--4">
    <div className="avatar">
      <div className="avatar__intro">
        <div
          key={idx}
          className="avatar__name"
          style={{ marginBottom: 15, paddingLeft: 15 }}
        >
          {name}
          {/* <FontAwesomeIcon icon={['fab', 'linkedin']} /> */}
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
            link="/docs/products/products-intro"
          />
          <Card
            title="Cloud Services"
            image="img/cloud.png"
            description="Explore our array of cloud services and offerings, where you can delve into the specifics of CIROH-AWS cloud. Learn how to gain access to this cloud infrastructure and uncover insights into working seamlessly with the 2i2c cloud services."
            link="/docs/services/"
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
              Are you enjoying our <strong>CIROH DocuHub</strong>{" "}
              website? Interested in{" "}
              <strong>
                contributing or adding your documentation, tutorials, training
                data, and more?
              </strong>
              <span>
                {" "}
                Discover how you can contribute to enhance our platform.{" "}
              </span>
              <br />
              <br />
              <a className="button button--info" href="/Contribute">
                How to Contribute?
              </a>
            </div>
          </div>
        </div>

        <div className="row" style={{ paddingTop: 30 }}>
          <div className="hero shadow--lw">
            <div className="container-fluid">
              <h1 className="hero__title">Our Proud Consortium Members</h1>
              {/* <h5>Not all heroes wear capes</h5> */}
              <br />
              <div className=" row">
                {MemberList.map((member, idx) => (
                  <Member key={idx} idx={idx} name={member} />
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
