import React, { useMemo, useState } from "react";
import NewsComponent from "./newscomponent";
import jsonData from "../../static/nextgen-news.json"; // Import the JSON data
import styles from './NewsComponent.module.css';

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MONTH_ABBREV = {
  "Jan": "January", "Feb": "February", "Mar": "March", "Apr": "April",
  "May": "May", "Jun": "June", "Jul": "July", "Aug": "August",
  "Sep": "September", "Oct": "October", "Nov": "November", "Dec": "December"
};

const News = () => {
  const { sections, years, monthsByYear } = useMemo(() => {
    const parsed = Object.keys(jsonData)
      .map((label) => {
        const parsed = parseDateKey(label);
        return {
          label,
          items: jsonData[label],
          sortDate: parsed.date,
          year: parsed.year,
          month: parsed.month
        };
      })
      .sort((a, b) => b.sortDate - a.sortDate);

    const uniqueYears = [...new Set(parsed.map(s => s.year))].sort((a, b) => b - a);
    const monthsByYearMap = {};
    
    parsed.forEach(section => {
      const yearKey = String(section.year);
      if (!monthsByYearMap[yearKey]) {
        monthsByYearMap[yearKey] = [];
      }
      if (!monthsByYearMap[yearKey].includes(section.month)) {
        monthsByYearMap[yearKey].push(section.month);
      }
    });

    // Sort months within each year
    Object.keys(monthsByYearMap).forEach(year => {
      monthsByYearMap[year].sort((a, b) => {
        const aIndex = MONTHS.indexOf(a);
        const bIndex = MONTHS.indexOf(b);
        return bIndex - aIndex; // Descending (newest first)
      });
    });

    return {
      sections: parsed,
      years: uniqueYears,
      monthsByYear: monthsByYearMap
    };
  }, []);

  const latestSection = sections[0];
  const [selectedYear, setSelectedYear] = useState(latestSection?.year ? String(latestSection.year) : "");
  const [selectedMonth, setSelectedMonth] = useState(latestSection?.month ?? "");
  const [showAll, setShowAll] = useState(false);

  const availableMonths = monthsByYear[selectedYear] || [];
  const selectedLabel = selectedYear && selectedMonth 
    ? `${selectedMonth} ${selectedYear} Update`
    : "";

  const visibleSections = showAll
    ? sections
    : sections.filter((section) => 
        section.year === parseInt(selectedYear, 10) && section.month === selectedMonth
      );

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    const months = monthsByYear[year] || [];
    if (months.length > 0) {
      setSelectedMonth(months[0]); // Select first (latest) month
    } else {
      setSelectedMonth("");
    }
    setShowAll(false);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setShowAll(false);
  };

  return (
    <div className={styles.newsWrapper}>
      <div className={styles.controlsBar}>
        <div className={styles.selectGroup}>
          <label className={styles.selectLabel} htmlFor="news-year-select">
            Year
          </label>
          <select
            id="news-year-select"
            className={styles.select}
            value={selectedYear}
            onChange={handleYearChange}
          >
            {years.map((year) => (
              <option key={year} value={String(year)}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectGroup}>
          <label className={styles.selectLabel} htmlFor="news-month-select">
            Month
          </label>
          <select
            id="news-month-select"
            className={styles.select}
            value={selectedMonth}
            onChange={handleMonthChange}
            disabled={availableMonths.length === 0}
          >
            {availableMonths.length === 0 ? (
              <option value="">No months available</option>
            ) : (
              availableMonths.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))
            )}
          </select>
        </div>

        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show selected month" : "Expand all months"}
        </button>
      </div>

      {visibleSections.map((section, index) => (
        <div key={section.label} className={styles.newsSection}>
          <NewsComponent
            data={{ date: section.label, items: section.items }}
            isLatest={showAll ? section.label === latestSection?.label && index === 0 : true}
          />
        </div>
      ))}
    </div>
  );
};

function parseDateKey(label) {
  // Try full month name format: "November 2025 Update"
  let match = label.match(
    /(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/i
  );
  
  if (match) {
    const month = match[1];
    const year = parseInt(match[2], 10);
    return {
      date: new Date(`${month} 1, ${year}`),
      year,
      month
    };
  }

  // Try abbreviated format: "Nov 2023 Update" or "Dec 2023 Update"
  match = label.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})/i);
  if (match) {
    const abbrev = match[1];
    const month = MONTH_ABBREV[abbrev] || abbrev;
    const year = parseInt(match[2], 10);
    return {
      date: new Date(`${month} 1, ${year}`),
      year,
      month
    };
  }

  // Fallback
  const fallback = new Date(label);
  const fallbackYear = fallback.getFullYear();
  const fallbackMonth = MONTHS[fallback.getMonth()] || "January";
  return {
    date: isNaN(fallback.getTime()) ? new Date(0) : fallback,
    year: isNaN(fallback.getTime()) ? new Date().getFullYear() : fallbackYear,
    month: fallbackMonth
  };
}

export default News;
