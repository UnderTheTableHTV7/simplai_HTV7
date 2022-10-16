import React from 'react'
import ReactPDF from '@intelllex/react-pdf'

class PDFViewer extends React.Component {
  constructor(props) {
    super(props);

    this.lastMove = 0;
    this.parent = props.parent;
    this.bindedListener = this.selectionChangeHandler.bind(this);

    document.addEventListener("selectionchange", this.bindedListener);
  }

  async selectionChangeHandler(e) { // just update state lmao
    // we can do filtering here if we have to
    if (Date.now() - this.lastMove >= 500) {
      this.parent.setState({selectedText: document.getSelection().toString(), e});
      this.lastMove = Date.now();
      await this.parent.fetchData();
    }
    
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