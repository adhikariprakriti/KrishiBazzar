import React,{useState} from 'react';
import Aux from '../../hoc/Auxilliary'
import Toolbar from '../../Dashboard/Navbar/Toolbar/Toolbar'
import './PostOffer.css'
import { Label, Input,FormGroup} from 'reactstrap';
import Button from '../../Components/Button/Button';
import axios from 'axios'


const PostOffer=()=>{
    const [category,setCategory]=useState('')
    const [name,setName]=useState('')
    const [quantity,setQuantity]=useState('')
    const [price,setPrice]=useState('')
    const [expiryDate,setExpiryDate]=useState('')
    const [description,setDescription]=useState('')
    const userDetails = localStorage.getItem('userDetails')

    const header = {
        'auth-token': userDetails.token,
      }
      
    const product={
        category: category,
        name: name,
        quantity: quantity,
        price: price,
        expiryDate:  expiryDate,
        description: description,
        // user_id:localStorage.getItem('token')
    }


    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log(product)

        axios.post('http://localhost:4000/posts/',{header:header},product)

    }

    return(
        <Aux>
            <Toolbar/>
            <div className="PostOffer">
                <div className="PostOffer_Container">
                    <h2>Post the product you want to sell</h2>
                     <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label >Product Category</Label>
                            <Input type="select" 
                                   name="select"
                                   value={category}
                                   onChange={(e)=>setCategory(e.target.value)}
                                   id="exampleSelect">
                                 <option value="Fruits">Fruits</option>
                                 <option value="Vegetable">Vegetable</option>
                                 <option value="Coffee">Coffee</option>
                                 <option value="Tea">Tea</option>
                                 <option value="Grains">Grains</option>
                           </Input>
                        </FormGroup>

                          <FormGroup>
                          <Label >Product Name</Label>
                          <Input type="text" 
                                 value={name}
                                 onChange={e=>setName(e.target.value)}
                                 name="product_name" 
                                 placeholder="Product Name" required/>
                          </FormGroup>

                          <FormGroup>
                          <Label >Product Quantity</Label>
                          <Input type="text" 
                                 value={quantity}
                                 onChange={e=>setQuantity(e.target.value)}
                                 name="product_quantity" 
                                 placeholder="Product Quantity" required />
                          </FormGroup>

                          <FormGroup>
                          <Label >price per kg</Label>
                          <Input type="text" 
                                 value={price}
                                 onChange={e=>setPrice(e.target.value)}
                                 name="price_per_kg" 
                                 placeholder="Price per kg" required/>
                          </FormGroup>

                          <FormGroup>
                          <Label>Expiry Date</Label>
                          <Input type="text" 
                                 name="expiry_date" 
                                 value={expiryDate}
                                 onChange={e=>setExpiryDate(e.target.value)}
                                 placeholder="yy-mm-dy" required/>
                          </FormGroup>

                          <FormGroup>
                          <Label > Product description</Label>
                          <Input type="textarea" 
                                 name="text" 
                                 value={description}
                                 onChange={e=>setDescription(e.target.value)}
                                 placeholder="product description" required/>
                          </FormGroup>

                          <Button>Submit</Button>
                     </form>

                </div>

            </div>
        </Aux>
    )
}

export default PostOffer;