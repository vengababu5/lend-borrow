import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
// import { MDBContainer } from "mdbreact";
// import { CDBContainer } from 'cdbreact';
// import { Bar } from 'react-chartjs-2';


const Dashboard = ({ getData }) => {
    const tabs = [{ name: 'Home', value: 'first' }, { name: 'Groups', value: 'second' }, { name: 'Settings', value: 'third' }, { name: 'Invite', value: 'fourth' }, { name: 'Logout', value: 'fifth' }]
    const userInfo = [{ name: 'Total Balance', val: '$182.00' },
    { name: 'You Owe', val: '$102.61' }, { name: 'You are owed', val: '$284.61' },]
    useEffect(() => {
        getData(true);
    }, []);
    const [data] = useState({
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    });

    return (
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={4}>
                    <h4>Lend&Borrow</h4>
                    <Nav variant="pills" className="flex-column">
                        {tabs.map(item => {
                            return (<>
                                <Nav.Item>
                                    <Nav.Link eventKey={item.value}>{item.name}</Nav.Link>
                                </Nav.Item>
                            </>)
                        })}
                    </Nav>


                </Col>
                <Col xs={6} md={6}>

                    <Row>
                        <Col md={5}><button type="submit" className="btn btn-color">ADD EXPENSES</button></Col>
                        <Col md={4}><button type="submit" className="btn btn-color">SETTLE UP</button></Col>
                    </Row>
                    <Row className="mt-3">
                        {userInfo.map(val => {
                            return (<>
                                <Col md={4}>
                                    <div className='dashboard-color'>
                                        <div>
                                            {val.name}

                                        </div>
                                        <div>{val.val}</div>
                                    </div>

                                </Col>
                            </>)
                        })}

                    </Row>
                    <Row></Row>
                </Col>

                <Col md={4}>
                    {/* <CDBContainer>
                        <h3 className="mt-5">Bar chart</h3>
                        <Bar data={data} options={{ responsive: true }} />
                    </CDBContainer> */}
                </Col>

            </Row>

        </Container>
    )
}
export default Dashboard