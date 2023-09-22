'use client'
import styles from './DashboardPage.module.css'
import pieChartImage from './piechart.svg'
import salesChartImage from './sales-chart.png'
import streamChartImage from './stream-chart.png'
import Image from 'next/image';


export const DashboardPage = () => {
  const handleOpenReportsClick = () => {
    window.parent.postMessage({type: 'navigation', params: {page: 'reports'}}, "http://app.local:4000");
  }


  return <div className={styles.content}>
    <div className={styles.header}>
      Dashboard
    </div>
    <div className={styles.section}>
      <div className={styles.subsection}>
        <Image src={pieChartImage} alt="Pie chart" style={{maxWidth: '100%'}}/>
      </div>
      <div className={styles.subsection}>
        <Image src={salesChartImage} alt="Sakes chart" style={{maxWidth: '100%'}}/>
        <button onClick={handleOpenReportsClick}>Otwórz raporty</button>
      </div>
    </div>
    <div className={styles.section}>
      <Image src={streamChartImage} alt="Stream chart" style={{maxWidth: '100%'}}/>
    </div>
  </div>
}