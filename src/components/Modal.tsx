import * as React from 'react';
import clsx from 'clsx';
import { styled, Box, Theme } from '@mui/system';
import Modal from '@mui/base/Modal';

export default function  ModalResult({modalShow, modalText}: any) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if(modalShow){
            setOpen(true);
        }
    }, []);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                slots={{ backdrop: StyledBackdrop }}
            >
                <Box sx={style}>
                    <h2 id="unstyled-modal-title">Text summarized:</h2>
                    <p id="unstyled-modal-description">{modalText}</p>
                </Box>
            </StyledModal>
        </div>
    );
}

const Backdrop = React.forwardRef<
    HTMLDivElement,
    { open?: boolean; className: string }
>((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ 'MuiBackdrop-open': open }, className)}
            ref={ref}
            {...other}
        />
    );
});


const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme: Theme) => ({
    width: 400,
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
});

