import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/Mun-Seok/front-hnm/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log('데이터 잘들어왔나', data);
        setProduct(data);
    };
    useEffect(() => {
        getProductDetail();
    }, []);
    return (
        <Container>
            <Row>
                <Col className="product-detail-img">
                    <img src={product?.img} alt="제품 사진" />
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>\{product?.price}</div>
                    <div>{product.choice ? 'Conscious choice' : ''}</div>
                    <div>{product.new ? '신제품' : ''}</div>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>{product?.size.length > 0 && product.size.map((item) => <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>)}</Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
