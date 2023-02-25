import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "../component/card";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";


function Product() {
    const [data, setData] = useState([])
    const nav = useNavigate();
    const [searchProd, setSearchProd] = useState('');

    const getHandler = () => {
        axios("https://fakestoreapi.com/products").then(res => {
            setData(res.data)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        getHandler();
    }, [])
    console.log(data)
    const getProduct = (e) => {
        nav('/mainproduct', {
            state: e
        })
    }
    console.log(searchProd)

    return (
        <div>
            <Container>
                <div style={{ height: '50px' }}>

                    <input type='search'
                        onChange={(e) => setSearchProd(e.target.value)}
                        style={{ width: '500px', height: '40px', marginTop: '5px', marginLeft: '30px' }} placeholder='Search Product' />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', }}>
                    {data.filter((x) => x.title.toLowerCase().includes(searchProd)).map((x, i) => {
                        return (
                            <Card title={x.title} src={x.image} price={x.price} btnvalue={() => getProduct(x)} />
                        )
                    })}
                </div>

            </Container>
        </div>
    )
}

export default Product;