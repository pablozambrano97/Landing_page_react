import React from 'react'
import Badge from 'react-bootstrap/Badge';

export default function Tags({bgColor, text}) {
    return (
        <Badge bg={bgColor}>{text}</Badge>
    )
}
