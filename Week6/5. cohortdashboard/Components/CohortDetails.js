import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const { name, technology, startDate, status } = props;
  const headingColor = status === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: headingColor }}>{name}</h3>
      <dl>
        <dt>Technology</dt>
        <dd>{technology}</dd>
        <dt>Start Date</dt>
        <dd>{startDate}</dd>
        <dt>Status</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
