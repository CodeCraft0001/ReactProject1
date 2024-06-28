import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productlists() {
  const[product,setProduct]=useState([])
  const fetchFunction=async()=>{
   const data = await fetch("https://fakestoreapi.com/products")
    data.json().then(data=>setProduct(data))
  }
  useEffect( ()=>{//useEffect doesnt give along with the fetch,because fetch() is an asynchronous function 
    fetchFunction()
  },[])//the empty array is given for stopping the noEnding Iteration
  console.log(product);
  return (
    <div>
        <h1 style={{textAlign:'center', fontFamily:'Lucida Handwriting', color:'purple',padding:'13px'}}>Productlists</h1>
        <Container>
      <Row style={{marginTop:'20px'}}>
        <Col lg={6}><img src="https://thumbs.dreamstime.com/b/concept-future-e-commerce-online-shopping-ai-generated-bags-carts-268420182.jpg" style={{height:'87%', width:'70%', borderRadius:'30px'}} alt="" /></Col>
        <Col lg={6}><h5>Welcome to your shopping world <span className='text-danger'>E-Cart</span></h5></Col>
        
      </Row>
    </Container>
    {product.length>0?
    <div className='p-4' style={{display:'flex', justifyContent:'space-between'}}>
      <Row>
        {
          product.map(i=>(
            <Col lg={3} md={4} sm={6}>
               <Card className='mt-4' style={{ width: '18rem',height:'34rem'}}>
      <Card.Img  variant="top" src={i.image} style={{height:'293px'}}/>
      <Card.Body style={{height:'350px'}}>
        <Card.Title>{i.title.length>30?i.title.slice(0,30)+"...":i.title}</Card.Title>
        <Card.Text>
          {i.category}<br/>
         <h5> ${i.price}</h5>
          Rating:<span className={i.rating.rate>4?'text-success':i.rating.rate>3?'text-warning':'text-danger'}><br/><i class="fa-solid fa-star">
            </i><i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            </span>
        </Card.Text>
        <Button variant="primary" style={{marginInlineStart:'73px'}}>Buy Now</Button>
      </Card.Body>
    </Card>
            </Col>
          ))
        }
      </Row>
    </div>
:
<div style={{textAlign:'center'}}>
<i class="fa-solid fa-spinner fa-spin-pulse fa-7x"></i>
</div>
}
      
    </div>
  )
}

export default Productlists
