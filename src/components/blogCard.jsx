import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fade from 'react-reveal/Fade';
import '../assets/scss/blogCard.scss';
const BlogCard = ({title,text}) => {
  return (
	<Fade bottom className="bg-dark-subtle">
     <Card className='bg-dark-subtle my-3'>
      <Card.Header as="h5" className='bg-dark-subtle'>{title}</Card.Header>
	 <hr />
      <Card.Body>
        <Card.Text className='bg-dark-subtle'>
			{text}
        </Card.Text>
        <Button variant="light">More Details</Button>
      </Card.Body>
    </Card>
    </Fade>
  )
}

export default BlogCard