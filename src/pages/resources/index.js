import React from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './resources.module.css';
import ResourceBrowser from '@site/src/components/ResourceBrowser';
import { MdApps } from 'react-icons/md';
import { HiDatabase } from 'react-icons/hi';
import { FaBookmark } from 'react-icons/fa';
import { MdPresentToAll } from 'react-icons/md';
import { PiGraduationCapFill } from 'react-icons/pi';
import { HiDocumentText } from 'react-icons/hi';

export default function Resources() {
  const hydroShareIcon = 'https://storage.googleapis.com/hydroshare-prod-static-media/static/img/logo-lg.cf4395806c8e.png';
  const tethysIcon = 'https://tethysgeoscience.org/wp-content/uploads/2025/01/TehtysPlatform.png';
  
  return (
    <Layout
      title="CIROH Community Resources"
      description="HydroShare resources and courses">
      <main>
        <div className={styles.resourcesBanner}>
          <div className={styles.resourcesContainer}>
            <h1 className={styles.resourcesTitle}>CIROH Community Resources</h1>
            <p className={styles.resourcesSubtitle}>
              Discover hydrologic data, models, tools, and learning modules curated from HydroShare.
              Explore CIROH's ecosystem of community-contributed resources supporting NOAA's hydrologic research.
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: '2rem' }}>
          <Tabs defaultValue="products" values={[
            {
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MdApps size={20} />
                  Products
                </span>
              ),
              value: 'products'
            },
            {
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <PiGraduationCapFill size={20} />
                  Courses
                </span>
              ),
              value: 'courses'
            },
            {
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MdPresentToAll size={20} />
                  Presentations
                </span>
              ),
              value: 'presentations'
            },
            {
              label: (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HiDatabase size={20} />
                  Datasets
                </span>
              ),
              value: 'datasets'
            },
          ]}>
            <TabItem value="products">
              <div className={styles.tabBanner}>
                <div className={styles.tabBannerContent}>
                  <h2 className={styles.tabTitle}>HydroShare Resources</h2>
                  <p className={styles.tabSubtitle}>
                Browse hydrologic resources: datasets, apps, and tools aligned with NextGen and CIROH initiatives.
                Enhance forecasting, analysis, and water resource management by making your web applications and tools accessible to CIROH and NOAA's hydrologic research initiatives.
                  </p>
                  <div className={styles.poweredBy}>
                    <span className={styles.poweredByLabel}>Powered by</span>
                    <img src={tethysIcon} alt="Tethys Platform" style={{height:32}} />
                    <img src={hydroShareIcon} alt="HydroShare" style={{height:32}} />
                  </div>
                </div>
              </div>
              <ResourceBrowser
                keyword="nwm_portal_app"
                resourceLabel="Resources"
                defaultImage="/img/datasets_logo_light.png"
              />
            </TabItem>
            <TabItem value="courses">
              <div className={styles.tabBanner}>
                <div className={styles.tabBannerContent}>
                  <h2 className={styles.tabTitle}>HydroShare Courses</h2>
                  <p className={styles.tabSubtitle}>
                    Access a range of open courses in hydrology, enriched with CIROH and NOAA research, designed for learners at all levels seeking to deepen their understanding of water science.
                  </p>
                  <div className={styles.poweredBy}>
                    <span className={styles.poweredByLabel}>Powered by</span>
                    <img src={tethysIcon} alt="Tethys Platform" style={{height:32}} />
                    <img src={hydroShareIcon} alt="HydroShare" style={{height:32}} />
                  </div>
                </div>
              </div>
              <ResourceBrowser
                keyword="nwm_portal_module"
                resourceLabel="Courses"
                defaultImage="/img/datasets_logo_light.png"
              />
            </TabItem>
            <TabItem value="presentations">
              <div className={styles.tabBanner}>
                <div className={styles.tabBannerContent}>
                  <h2 className={styles.tabTitle}>Presentations</h2>
                  <p className={styles.tabSubtitle}>
                    Explore CIROH and partner conference, workshop, and webinar presentations covering hydrologic modeling, forecasting, and water resources research.
                  </p>
                  <div className={styles.poweredBy}>
                    <span className={styles.poweredByLabel}>Powered by</span>
                    <img src={hydroShareIcon} alt="HydroShare" style={{height:32}} />
                  </div>
                </div>
              </div>
              <ResourceBrowser
                keyword="ciroh_portal_presentation"
                resourceLabel="Presentations"
                defaultImage="/img/datasets_logo_light.png"
              />
            </TabItem>
            <TabItem value="datasets">
              <div className={styles.tabBanner}>
                <div className={styles.tabBannerContent}>
                  <h2 className={styles.tabTitle}>Datasets</h2>
                  <p className={styles.tabSubtitle}>
                    Access curated hydrologic datasets including model outputs, observations, and forcing data supporting CIROH and NOAA water prediction initiatives.
                  </p>
                  <div className={styles.poweredBy}>
                    <span className={styles.poweredByLabel}>Powered by</span>
                    <img src={hydroShareIcon} alt="HydroShare" style={{height:32}} />
                  </div>
                </div>
              </div>
              <ResourceBrowser
                keyword="ciroh_portal_data"
                resourceLabel="Datasets"
                defaultImage="/img/datasets_logo_light.png"
              />
            </TabItem>
          </Tabs>
        </div>
      </main>
    </Layout>
  );
  
}
