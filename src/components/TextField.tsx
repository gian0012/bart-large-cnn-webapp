import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {styled} from '@mui/system';
import '@fontsource/roboto/500.css';
import Button, {buttonClasses} from '@mui/base/Button';
import Grid from '@mui/material/Grid';
import ModalResult from './Modal';
export default function TextField() {

    const [modalText, setModalText] = React.useState('');
    const [modalShow, setModalShow] = React.useState(false);

    const blue: any = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
    };



    const handleSubmit = async (e: any) => {
        e.preventDefault();
        async function query(data: any) {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
                {
                    headers: { Authorization: "Bearer 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" },
                    method: "POST",
                    body: JSON.stringify(data)
                }
            );
            const result = await response.json();
            return result;
        }


        query({"inputs": e.target[0].value}).then((response) => {
            setModalText(response[0].summary_text);
        });

            setModalShow(true);

        }


    const CustomButton = styled(Button)(
        ({theme}) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[500]};
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 3px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
  `,
    );


    const StyledTextarea = styled(TextareaAutosize)(
        ({theme}) => `
    width: 320px;
    font-family: Montserrat, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    
  `,

    );

    return (
        <>
               <form onSubmit={handleSubmit} >
                   <Grid container
                         spacing={5}
                         alignItems="center"
                         justifyContent="center"
                   >
                       <Grid container item spacing={3}
                             alignItems="center"
                             justifyContent="center"
                       >
                           <h1 style={{
                               fontFamily: 'Roboto',
                               textAlign: 'center',
                           }}> AI Text Summarization</h1>
                       </Grid>
                       <Grid container item spacing={3}
                             alignItems="center"
                             justifyContent="center"
                       >
                           <StyledTextarea aria-label="empty textarea"
                                           placeholder="The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct."/>
                       </Grid>
                       <Grid container item spacing={3}
                             alignItems="center"
                             justifyContent="center"
                       >
                           <CustomButton
                               type="submit" >Button</CustomButton>
                       </Grid>
                   </Grid>
               </form>

            {modalShow && <ModalResult modalText={modalText} modalShow={modalShow} />}
        </>
    )
}
