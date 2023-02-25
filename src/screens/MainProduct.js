import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";

function MainProduct() {
    const location = useLocation()
    console.log(location.state)
    return (<div>
        <Container>
        <div style={{marginTop: '20px'}}>
            <img src={location.state.image} style={{width: '300px'}} />
        </div>
        <div>
            <h3>{location.state.title}</h3>
        </div>
        <div>
            <p><b>Category:</b> {location.state.category} <b>Rating:</b> {location.state.rating.rate}</p>
        </div>
        <div>
            <p>{location.state.description}</p>
        </div>
        <div>
            <h4>Price: {location.state.price} RS</h4>
        </div>
        </Container>
    </div>)
}

export default MainProduct;