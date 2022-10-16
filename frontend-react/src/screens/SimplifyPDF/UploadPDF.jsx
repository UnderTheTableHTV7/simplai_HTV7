import { Grid, Paper, Dialog, Typography } from '@mui/material';
import React from 'react'
import axios from 'axios'

// Import local files.
import Navbar from '../../components/Navbar/NavbarApp.jsx'
import PDFViewer from '../../components/PDFViewer/PDFViewer';
import TranslationBox from '../../components/TranslationBox/TranslationBox';

class UploadPDF extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedText: '', // PDFViewer updates state
      mode: 'upload',
      fileRead: '',
      translatedText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap intoelectronic"
    }

    this.fileReader = new FileReader();

    this.handleClose = this.handleClose.bind(this);
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleFileRead = this.handleFileRead.bind(this); 
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    if (this.state.selectedText) {
      // Make the api call and set ranslatedtext
      let res = await fetch("http://api.bobloblaw.tech/simplify_nested/" , { // Need host lol
        method: 'POST',
        body: JSON.stringify({
          input_text: this.state.selectedText.trim()
        }),
        headers: {
          "Content-type": "application/json",
        }
      })

      let resObj = await res.json();

      this.setState({translatedText: resObj.simplified_text});
    }
  }

  //curl -X 'POST' 'http://api.bobloblaw.tech/simplify_nested/?input_text=fr4fr4f' -H 'accept: application/json' -d ''

  render() {
    if (this.state.mode == 'display') {
      return (
        <div>
            <Navbar/>
            <TranslationBox innerText={this.state.translatedText} />
            <PDFViewer parent={this} url={this.state.fileRead}></PDFViewer>
        </div>
      )
    } else if (this.state.mode == 'upload') {
      return (
        <Dialog open={true} onClose={this.handleClose}>
          <Paper sx={{padding: 10, textAlign: 'center'}}>
            <Typography variant='h5'>Please select file to upload</Typography>
            <input type='file' accept='.pdf' onChange={this.handleFileSelect}/>
          </Paper>
        </Dialog>
      )
    }
    
    return (<div>Bruh</div>);
    
  }

  handleClose() {
    //now change to display mode
    this.setState({mode: 'display'})
  }

  handleFileSelect(e) {
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsDataURL(e.target.files[0]);
  }

  handleFileRead(e) {
    this.setState({fileRead: this.fileReader.result});
    this.handleClose();
  }
}
  

export default UploadPDF