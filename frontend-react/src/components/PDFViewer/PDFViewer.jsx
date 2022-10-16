import React from 'react'
import ReactPDF from '@intelllex/react-pdf'

class PDFViewer extends React.Component {
  constructor(props) {
    super(props);

    this.stateUpdateTimeout = undefined;
    this.bindedListener = this.selectionChangeHandler.bind(props.parent);

    document.addEventListener("selectionchange", this.bindedListener);
  }

  selectionChangeHandler(e) { // just update state lmao
    // we can do filtering here if we have to
    this.setState({selectedText: document.getSelection().toString(), e});
    
  }

  render() {
    return (
      <div>
          <ReactPDF url={this.props.url} />
      </div>
    )
  }
}
  

export default PDFViewer;