import { Button } from "@mui/material";

function Card(a) {
    return <div><div style={{height: '400px'}}>
        <h4>{a.id}</h4>
        <img src={a.src} style={{ width: '170px', height: '180px' }} />
        <h4 style={{width: '200px', height: '80px'}}>{a.title}</h4>

        <h5>Price: {a.price}Rs</h5>

        <Button variant="contained" onClick={a.btnvalue}>Show Product</Button>
    </div>
    </div>
}

export default Card;