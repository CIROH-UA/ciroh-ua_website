import  { useState } from "react";
import themes from "./themes.module.css";
import ReactMarkdown from "react-markdown";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./NewsComponent.module.css";

// this decides which layout to use (anything before Nov 2025 uses old layout)

const NewsComponent = ({ data, isLatest }) => {
  const isNew = isNewFormat(data.date);

  if (!isNew) {
    return <OldNewsSection data={data} isLatest={isLatest} />;
  }

  return <NewNewsSection data={data} isLatest={isLatest} />;
};



function isNewFormat(dateString) {
  if (!dateString || typeof dateString !== "string") return false;
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const match = dateString.match(
    /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/
  );

  if (!match) return false;

  const monthName = match[1];
  const yearNum = parseInt(match[2], 10);
  const monthIndex = monthNames.indexOf(monthName); // 0 = Jan, 10 = Nov

  if (yearNum > 2025) return true;
  if (yearNum === 2025 && monthIndex >= 10) return true; // November (10) or December (11)

  return false;
}

// =====================================================
// =============== OLD LAYOUT (pre-Nov 2025) ===========
// =====================================================

const OldNewsSection = ({ data, isLatest }) => {
  const [isExpanded, setIsExpanded] = useState(isLatest);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const logoSafeUrl = useBaseUrl("/img/logos/ciroh-bgsafe.png");
  const sidelineDarkUrl = useBaseUrl("/img/graphics/news/sideline-dark.png");
  const sidelineLightUrl = useBaseUrl("/img/graphics/news/sideline-light.png");
  const underlinesDarkUrl = useBaseUrl("/img/graphics/news/underlines-dark.png");
  const underlinesLightUrl = useBaseUrl("/img/graphics/news/underlines-light.png");

  return (
    <div className={styles.newsContainer}>
      <div className={styles.headerSection} onClick={toggleExpand}>
        <div className={styles.logoSection}>
          <img
            className={`${themes.darkImage} ${styles.logo}`}
            alt="CIROH logo"
            src={logoSafeUrl}
          />
          <img
            className={`${themes.lightImage} ${styles.logo}`}
            alt="CIROH logo"
            src={logoSafeUrl}
          />
        </div>

        <div className={styles.titleSection}>
          <div className={styles.titleRow}>
            <img
              className={`${themes.darkImage} ${styles.waveIcon}`}
              alt="Wave graphic"
              src={sidelineDarkUrl}
            />
            <img
              className={`${themes.lightImage} ${styles.waveIcon}`}
              alt="Wave graphic"
              src={sidelineLightUrl}
            />
            <span className={styles.titleText}>News</span>
            <img
              className={`${themes.darkImage} ${styles.waveIcon}`}
              alt="Wave graphic"
              src={sidelineDarkUrl}
            />
            <img
              className={`${themes.lightImage} ${styles.waveIcon}`}
              alt="Wave graphic"
              src={sidelineLightUrl}
            />
          </div>
          <h2 className={styles.dateTitle}>{data.date}s</h2>
          <div className={styles.underlineSection}>
            <img
              className={`${themes.darkImage} ${styles.underline}`}
              alt="Wave graphic"
              src={underlinesDarkUrl}
            />
            <img
              className={`${themes.lightImage} ${styles.underline}`}
              alt="Wave graphic"
              src={underlinesLightUrl}
            />
          </div>
        </div>

        <div className={styles.expandIndicator}>
          <span
            className={`${styles.expandIcon} ${
              isExpanded ? styles.expanded : ""
            }`}
          >
            {isExpanded ? "−" : "+"}
          </span>
          <span className={styles.expandText}>
            {isExpanded ? "Click to collapse" : "Click to expand"}
          </span>
        </div>
      </div>

      {isExpanded && (
        <div className={styles.newsContent}>
          {data.items.map((item, index) => (
            <div key={index} className={styles.newsItem}>
              <div className={styles.itemHeader}>
                <span
                  className={`${styles.badge} ${
                    styles[`badge--${getBadgeClass(item.type)}`]
                  }`}
                >
                  {item.type}
                </span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>

              <div className={styles.itemDescription}>
                {renderDescription(item.description)}
              </div>

              {item.link && (
                <div className={styles.itemLink}>
                  <Link
                    to={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.readMoreLink}
                  >
                    <span>Read more</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// =====================================================
// =============== NEW LAYOUT (Nov 2025+) ==============
// =====================================================

const NewNewsSection = ({ data, isLatest }) => {
  const [isExpanded, setIsExpanded] = useState(isLatest);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const logoSafeUrl = useBaseUrl("/img/logos/ciroh-bgsafe.png");
  const sidelineDarkUrl = useBaseUrl("/img/graphics/news/sideline-dark.png");
  const sidelineLightUrl = useBaseUrl("/img/graphics/news/sideline-light.png");
  const underlinesDarkUrl = useBaseUrl("/img/graphics/news/underlines-dark.png");
  const underlinesLightUrl = useBaseUrl("/img/graphics/news/underlines-light.png");

  const groupedItems = groupItemsByTitle(data.items);

  return (
    <div className={styles.newsContainer}>
      <div className={styles.headerSection} onClick={toggleExpand}>
        <div className={styles.logoSection}>
          <img
            className={`${themes.darkImage} ${styles.logo}`}
            alt="CIROH logo"
            src={logoSafeUrl}
          />
          <img
            className={`${themes.lightImage} ${styles.logo}`}
            alt="CIROH logo"
            src={logoSafeUrl}
          />
        </div>

        <div className={styles.titleSection}>
          <div className={styles.titleRow}>
            <img
              className={`${themes.darkImage} ${styles.waveIcon}`}
              alt="Wave graphic"
              src={sidelineDarkUrl}
            />
            <img
              className={`${themes.lightImage} ${styles.waveIcon}`}
              alt="Wave graphic"
              src={sidelineLightUrl}
            />
            <span className={styles.titleText}>News</span>
            <img
              className={`${themes.darkImage} ${styles.waveIcon}`}
              alt="Wave graphic"
              src={sidelineDarkUrl}
            />
            <img
              className={`${themes.lightImage} ${styles.waveIcon}`}
              alt="Wave graphic"
              src={sidelineLightUrl}
            />
          </div>
          <h2 className={styles.dateTitle}>{data.date}s</h2>
          <div className={styles.underlineSection}>
            <img
              className={`${themes.darkImage} ${styles.underline}`}
              alt="Wave graphic"
              src={underlinesDarkUrl}
            />
            <img
              className={`${themes.lightImage} ${styles.underline}`}
              alt="Wave graphic"
              src={underlinesLightUrl}
            />
          </div>
        </div>

        <div className={styles.expandIndicator}>
          <span
            className={`${styles.expandIcon} ${
              isExpanded ? styles.expanded : ""
            }`}
          >
            {isExpanded ? "−" : "+"}
          </span>
          <span className={styles.expandText}>
            {isExpanded ? "Click to collapse" : "Click to expand"}
          </span>
        </div>
      </div>

      {isExpanded && (
        <div className={styles.newsContent}>
          <div className={styles.newsGrid}>
            {groupedItems.map((group, index) => (
              <NewsCard key={`${group.title}-${index}`} item={group} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ---- Badge class (shared) ----

function getBadgeClass(type) {
  switch (type) {
    case "bug":
      return "danger";
    case "note":
      return "info";
    case "feature":
      return "success";
    case "news":
      return "info";
    case "update":
      return "warning";
    case "NGIAB":
      return "success";
    case "NRDS":
      return "primary";
    case "blog":
      return "info";
    default:
      return "primary";
  }
}

// ---- Markdown description (shared) ----

function renderDescription(description) {
  if (!description) return null;

  return (
    <ReactMarkdown
      children={description}
      components={{
        a: ({ node, ...props }) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.markdownLink}
            {...props}
          />
        ),
      }}
      urlTransform={safelyUseBaseUrl}
    />
  );
}

function isWebLink(part) {
  return part.startsWith("http://") || part.startsWith("https://");
}

function safelyUseBaseUrl(link) {
  if (isWebLink(link)) return link;
  return useBaseUrl(link);
}
function getLinksFromItem(item) {
  if (item?.links && Array.isArray(item.links)) return item.links;
  if (item?.link) return [item.link];
  return [];
}

function extractVersionFromLink(link) {
  if (!link) return null;
  const tagMatch = link.match(/\/tag\/([^\/]+)/);
  return tagMatch ? tagMatch[1] : null;
}

function extractVersions(item) {
  const versions = [];

  if (item?.versions && Array.isArray(item.versions)) {
    return item.versions;
  }

  if (item?.links && Array.isArray(item.links)) {
    item.links.forEach((link) => {
      const v = extractVersionFromLink(link);
      if (v) versions.push(v);
    });
    return versions;
  }

  if (item?.version) {
    versions.push(item.version);
  } else if (item?.link) {
    const v = extractVersionFromLink(item.link);
    if (v) versions.push(v);
  }

  return versions;
}

function groupItemsByTitle(items) {
  const grouped = {};

  items.forEach((item) => {
    const title = item.title;
    if (!grouped[title]) {
      grouped[title] = {
        type: item.type,
        title,
        links: [],
        versions: [],
        description: item.description || "",
        contributors: item.contributors ?? null,
        release_date: item.release_date ?? null, 
      };
    }

    const itemLinks = getLinksFromItem(item);
    const itemVersions = extractVersions(item);

    grouped[title].links.push(...itemLinks);
    grouped[title].versions.push(...itemVersions);

    if (item.description) {
      grouped[title].description = item.description;
    }

    if (item.contributors !== undefined) {
      grouped[title].contributors = item.contributors;
    }
  });

  return Object.values(grouped).map((group) => ({
    ...group,
    links: [...new Set(group.links)],
    versions: [...new Set(group.versions)],
  }));
}

function formatRelativeTime(dateInput) {
  const date = new Date(dateInput);
  const now = new Date();
  const diffMs = now - date;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  const weeks = Math.floor(diffDays / 7);
  if (diffDays < 30) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  const months = Math.floor(diffDays / 30);
  if (diffDays < 365) return `${months} month${months > 1 ? "s" : ""} ago`;
  const years = Math.floor(diffDays / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

function NewsCard({ item }) {

  const versions = extractVersions(item);
  const links = getLinksFromItem(item);
  const contributorsCount = item.contributors ?? 0;
 const releaseDate = item.release_date
    ? new Date(item.release_date)
    : null;

  const relativeTime = releaseDate
    ? formatRelativeTime(releaseDate)
    : null;


  // Map version -> link so each tag button links correctly to the release notes
  const versionToLinkMap = {};
  links.forEach((link) => {
    const v = extractVersionFromLink(link);
    if (v && !versionToLinkMap[v]) {
      versionToLinkMap[v] = link;
    }
  });

  return (
    <div className={styles.newsCard}>
      <div className={styles.cardHeader}>
        <span
          className={`${styles.cardBadge} ${
            styles[`cardBadge--${getBadgeClass(item.type)}`]
          }`}
        >
          {item.type}
        </span>
       
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{item.title}</h3>

        {item.description && (
          <div className={styles.cardDescription}>
            {renderDescription(item.description)}
          </div>
        )}

        {versions.length > 0 && (
          <div className={styles.cardVersions}>
            {versions.map((version, idx) => {
              const versionLink = versionToLinkMap[version];
              if (versionLink) {
                return (
                  <Link
                    key={idx}
                    to={versionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.versionTag}
                  >
                    {version}
                  </Link>
                );
              }
              return (
                <span key={idx} className={styles.versionTag}>
                  {version}
                </span>
              );
            })}
          </div>
        )}

        <div className={styles.cardMeta}>
           {relativeTime && (
            <span className={styles.cardMetaItem}>
              <span className={styles.metaIcon}>🟢</span>
              {relativeTime}
            </span>
          )}


          {contributorsCount > 0 && (
            <span className={styles.cardMetaItem}>
              <span className={styles.metaIcon}>👥</span>
              {contributorsCount} contributor
              {contributorsCount !== 1 ? "s" : ""}
            </span>
          )}

         
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
