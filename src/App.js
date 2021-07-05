import axios from 'axios'
import './App.css';
import React, {useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);



function App() {

  const [quote, setQuote] = useState({
    author: '',
    content: ''
   })

   const fetchData = () => {
    return axios.get('https://api.quotable.io/random')
    .then((res) => {
      setQuote({...quote, author: '"' + res.data.author + '"', content: res.data.content})
    })
    .catch((err) => {
      console.error(err)
    })
  }
  

  return (
    <>
    
    <h1 className='app-title'>Famous Quotes App</h1>
    <div className="App">
      <div className='content'>
        <p className='text'>{quote.content}</p>
        <p className='author'>{quote.author}</p>
      </div>
      <div className='bottom-content'>
        <IconButton>
            <TwitterIcon 
              style={{ fill: '#FE6B8B'}}
              fontSize='large' />
        </IconButton>
        
        <StyledButton 
          variant='outlined' 
          size='medium'
          className='button' 
          onClick={fetchData}
                 >
             {quote.content === '' ? 'GENERATE QUOTE' : 'NEXT QUOTE'}
          </StyledButton>
      </div> 
    </div>
    </>
  );
}

export default App;
