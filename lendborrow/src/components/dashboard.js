import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'

const Dashboard = () => {
    const tabs = [{ name: 'Home', value: 'first' }, { name: 'Groups', value: 'second' }, { name: 'Settings', value: 'third' }, { name: 'Invite', value: 'fourth' }, { name: 'Logout', value: 'fifth' }]
    const userInfo = [{ name: 'Total Balance', val: '$182.00' },
    { name: 'You Owe', val: '$102.61' }, { name: 'You are owed', val: '$284.61' },]
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
                <Col xs={6} md={8}>
                    <button type="submit" className="btn btn-color">ADD EXPENSES</button>
                    <button type="submit" className="btn btn-color">SETTLE UP</button>
                    <Row>
                        {userInfo.map(val => {
                            return (<>
                                <Col md={3}>
                                    <div>
                                        {val.name}

                                    </div>
                                    <div>{val.val}</div>

                                </Col>
                            </>)
                        })}

                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
export default Dashboard