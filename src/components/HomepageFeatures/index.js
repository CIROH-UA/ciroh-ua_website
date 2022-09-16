import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        CIROH, a partnership between NOAA and the University of Alabama, is a national consortium committed to advance the forecasting of floods, droughts, and water quality. CIROH scientists work to improve hydrologic process understanding, operational hydrologic forecasting techniques and workflows, community water modeling, translation of forecasts to actionable products, and use of water predictions in decision making.

      </>
    ),
  },
  {
    title: 'Goals',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        - Advance research and thought leadership in support of NOAA’s Office of Water Prediction mission to: “collaboratively research, develop and deliver state-of-the science national hydrologic analyses, forecast information, data, guidance, and equitable decision-support services to inform essential emergency management and water resources decisions across all time scales;”
        - Reinforce the NWS National Water Center’s (NWC) mission to “promote collaboration across the scientific community, serving as both a catalyst to accelerate the transition of research into operations and a center of excellence for water resources science, information, and prediction services;” and
        - Strengthen communities of practice to synthesize a new generation of interdisciplinary and innovative research products, education, and outreach supporting NOAA’s vision of a water- and weather-ready nation.
      </>
    ),
  }, 
  {
    title: 'Research Themes',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        - Improving Water Resources Prediction System Capabilities. CIROH will improve geospatial intelligence, inputs, probabilistic forcings, data assimilation, operational workflows and tools, and uncertainty quantification extending water resources predictions capabilities and applications.
        - Advancing Community Water Resources Modeling. CIROH will advance a state-of-the-art, community driven mechanistic hydrological model with hybrid integration of artificial intelligence and data-driven approaches with biophysical-hydrological-social processes coupled to advance the speed, accuracy, and resolution of prediction.
        - Innovating Hydroinformatics Tools and Data Science Applications. CIROH will promote FAIR data and hydrologic modeling principles with innovations in data and informatics tools and community engagement approaches.
        - Integrating Social, Economic, and Behavioral Science in Water Resources Prediction. CIROH will serve as an integrator of research-to-operations-to-research (R2O2R) interactions connecting researchers, operators, modelers, data scientists, social scientists, decision makers, and communication and policy experts in a cooperative hydrologic research and prediction community.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
