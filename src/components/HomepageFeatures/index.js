import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
];

const MemberList = [
  'University of Alabama',
  'Utah State University',
  'University of Utah',
  'University of Iowa',
  'University of Arizona',
  'University of Saskatchewan',
  'University of Vermont',
  'Penn State',
  'Brigham Young University',
  'CUAHSI',
  'University of Hawai ',
  'Tuskegee University',
  'The University of Alabama Huntsville (UAH)',
  'University of Minnesota',

];

function Member({ title }) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center padding-horiz--md">

        <p>{title}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className='col col--6' style={{ textAlign: 'center' }}>
            <img alt="noaaImage" src="img/noaalogo.png" />
          </div>
          <div className='col col--6' style={{ textAlign: 'center' }}>
            <img alt="noaaImage" src="img/cirohlogo-trans.png" style={{ height: 275, width: 275, marginTop: 15 }} />
          </div>

        </div>
        <div className="row">
          <div className='col col--12'>
            <div className="card1">
              <div className="card__body">
                <span style={{ fontSize: 20 }}>
                  <b>CIROH</b>, a partnership between <b>NOAA</b> and <b>the University of Alabama</b>, is a national consortium committed to advance the forecasting of floods, droughts, and water quality. CIROH scientists work to improve hydrologic process understanding, operational hydrologic forecasting techniques and workflows, community water modeling, translation of forecasts to actionable products, and use of water predictions in decision making.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero shadow--lw">
            <div className="container-fluid">
              <h1 className="hero__title">Our Proud Research Members</h1>
              {/* <h5>Not all heroes wear capes</h5> */}
              <br/>
              <div className=' row'>
              {MemberList.map((member) =>
                <div className={clsx('col col--4')}>
                  <div className="avatar">
                    <div className="avatar__intro">
                      <div className="avatar__name" style={{marginBottom:20}}>{member}</div>
                    </div>
                  </div>
                </div>
              )}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
