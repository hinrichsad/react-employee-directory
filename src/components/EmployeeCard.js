import React from "react";
import Container from 'react-bootstrap/Container'

 function EmployeeCard({ name, image, dept, email, phone}) {
    return (
        <Container className="employee-row shadow">
            <img
                style={{ maxWidth: "80px"}}
                className="employee-photo"
                src={image}
                alt="employee"
            />
            <span className="employee">{name}</span>
            <span className="employee">{dept}</span>
            <span className="employee">{email}</span>
            <span className="employee">{phone}</span>
        </Container>
    )
}

export default EmployeeCard;