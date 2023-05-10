import React from 'react';

export default function MbtiSelect({ onChange }) {
    const options = [
        { value: '', label: 'MBTI' },
        { value: 'ISTJ', label: 'ISTJ' },
        { value: 'ISFJ', label: 'ISFJ' },
        { value: 'INFJ', label: 'INFJ' },
        { value: 'INTJ', label: 'INTJ' },
        { value: 'ISTP', label: 'ISTP' },
        { value: 'ISFP', label: 'ISFP' },
        { value: 'INFP', label: 'INFP' },
        { value: 'INTP', label: 'INTP' },
        { value: 'ESTP', label: 'ESTP' },
        { value: 'ESFP', label: 'ESFP' },
        { value: 'ENFP', label: 'ENFP' },
        { value: 'ENTP', label: 'ENTP' },
        { value: 'ESTJ', label: 'ESTJ' },
        { value: 'ESFJ', label: 'ESFJ' },
        { value: 'ENFJ', label: 'ENFJ' },
        { value: 'ENTJ', label: 'ENTJ' },
    ];

    return (
        <select onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
}