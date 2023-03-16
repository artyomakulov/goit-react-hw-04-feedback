import React from 'react'
import PropTypes from 'prop-types';
import css from './App.module.css'

export default function Statistics({good, neutral, bad, total, positiveFeedBack}) {
    return (
        <div className={css.value}>
        <h2>Statistics</h2>
        <span className={css.btn_value}>good: {good}</span>
        <span className={css.btn_value}>neutral: {neutral}</span>
        <span className={css.btn_value}>bad: {bad}</span>
        <span className={css.btn_value}>total: {total}</span>
        <span className={css.btn_value}>Positive FeedBack: {Math.round(positiveFeedBack)}%</span>
    </div>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedBack: PropTypes.number.isRequired,
}