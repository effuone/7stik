const AchievementItem = (props)=>{
    const [name, setName] = useState('Achievement')
    const [description, setDescription] = useState('Sample description')
    const [image, setImage] = useState('sampleimage.jpg')
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description} 
                </Card.Text>
                <Button variant="primary">Edit</Button>
            </Card.Body>
        </Card>  
    )
}

export default AchievementItem