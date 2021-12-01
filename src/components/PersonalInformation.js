import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const STATES = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana','Nebraska','Nevada','New Hampshire',
    'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma',
    'Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas',
    'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']





    

    function PersonalInformation() {
        const [values, setValues] = useState({

            firstName: "",
            lastName: "",
            addressLine1: "",
            email: "",
            addressCity: "",
            addressState: "",
            addressPostalCode: "",
            phoneNumber: "",
            birthDate: "",
            SSN:""
        });

        console.log(values);

        const set = (name) => {
            return ({ target: { value } }) => {
                setValues((oldValues) => ({ ...oldValues, [name]: value }));
            };
        };

        return (
            <Container>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="Name" required
                                value={values.firstName} onChange={set("firstName")} placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="Name" required
                                value={values.lastName} onChange={set("lastName")} placeholder="Last Name" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="Address" required
                            value={values.addressLine1} onChange={set("addressLine1")} placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Emal</Form.Label>
                        <Form.Control type="Email" required
                            value={values.addressLine2} onChange={set("Email")} placeholder="example@example.com" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control required
                                value={values.city} onChange={set("addressCity")} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select value={values.addressState} onChange={set("addressState")}>
                                <option value="">Choose...</option>
                                {STATES.map(s => <option key={s}>{s}</option>)}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control required
                                value={values.addressPostalCode} onChange={set("addressPostalCode")} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridphoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required
                                value={values.phoneNumber} onChange={set("phoneNumber")} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridBirthDate">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control required
                                value={values.birthDate} onChange={set("birthDate")} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridSSN">
                            <Form.Label>SSN</Form.Label>
                            <Form.Control required
                                value={values.SSN} onChange={set("SSN")}
                                type="password"                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }


export default PersonalInformation;