import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent'


function RenderstaffList({ staff,isLoading, errMess }) {

    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 

    return (
        <Card style={{ marginTop: 10, textAlign: 'center' }}>
            <Link style={{ textDecoration: 'none' }} to={`/StaffList/${staff.id}`}>
                <CardImg width='100%' src={staff.image} alt={staff.name} />
                <CardBody style={{ margin: -16 }} >
                    <CardTitle style={{ marginBottom: 0, color: 'black' }} >{staff.name}</CardTitle>
                </CardBody>
            </Link>
        </Card>
    )
}

export default RenderstaffList