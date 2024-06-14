    import React from 'react';
    import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Icon } from '@mui/material';
    import { alpha } from '@mui/system';
    import {Cancel, CheckCircle  } from '@mui/icons-material';

    function Modal({ open, onClose, title, message, color, type }) {
    return (
        <Dialog 
        PaperProps={{ 
            style: { 
            ...styles.container, 
            borderColor: color 
            } 
        }} 
        open={open} 
        onClose={onClose}
        >
        <Box textAlign='center' width='100%'>
           {type == 'correct' ?  <CheckCircle width='100%' style={{ color: color, fontSize: 50 }} /> : <Cancel width='100%' style={{ color: color, fontSize: 50 }} />}
        </Box>
         
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <Typography>{message}</Typography>
        </DialogContent>
        <DialogActions>
            <Box textAlign='center' width='100%'>
            <Button 
                onClick={onClose} 
                style={{ color: color }} 
                sx={{ 
                '&:hover': { 
                    backgroundColor: color ? alpha(color, 0.1) : 'transparent',
                    color: 'white'
                } 
                }}
            >
                {type == 'correct' ? "AVANÇAR" : "OK"}
            </Button>
            </Box>
        </DialogActions>
        </Dialog>
    );
    }

    const styles = {
        container : {
            borderRadius: 10,
            padding: 10,
            textAlign: 'center',
            borderWidth: 3,
            borderStyle: 'solid',
        }
    }

    export default Modal;