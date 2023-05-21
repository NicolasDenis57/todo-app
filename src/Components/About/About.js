import { useParams, useNavigate } from "react-router-dom"
import Button from '../UI/Button/Button'

const About = () => {

      const { name } = useParams();

      const navigate = useNavigate();

      const handleClick = () => {
            navigate('/');
      }
      
      return (
            <div>
                  <h1>Welcome { name ? name : 'on About Page' }!</h1>
                  <Button onClick={ handleClick }>Go To Home !</Button>
            </div>
      );
}

export default About;