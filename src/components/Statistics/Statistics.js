import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 class={styles.title}>{title}</h2>}

    <ul class={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          class={styles.item}
          style={{
            backgroundColor: `${
              '#' +
              (Math.random().toString(16) + '000000')
                .substring(2, 8)
                .toUpperCase()
            }`,
          }}
          key={id}
        >
          <span class={styles.label}>{label}</span>
          <span class={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

Statistics.defaultProps = {
  title: '',
  label: 'format',
};

export default Statistics;
