import { Grid, Paper, Dialog, Typography } from '@mui/material';
import React from 'react'

// Import local files.
import Navbar from '../../../components/Navbar/NavbarApp'
import PDFViewer from '../../../components/PDFViewer/PDFViewer';
import TranslationBox from '../../../components/TranslationBox/TranslationBox';

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
      let res = await fetch("http://6750-2606-fa00-8a0-705-4ca8-63ce-b139-b11d.ngrok.io/simplify_nested/", { // Need host lol
        method: 'POST'
      })

      let resObj = await res.json();

      this.setState({translatedText: resObj.simplified_text});
    }
  }

  render() {
    if (this.state.mode == 'display') {
      return (
        <div>
            <Navbar/>
            <TranslationBox innerText={this.translatedText} />
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