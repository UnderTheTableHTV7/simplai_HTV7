import React from 'react'
import ReactPDF from '@intelllex/react-pdf'

class PDFViewer extends React.Component {
  constructor(props) {
    super(props);

    this.stateUpdateTimeout = undefined;
    this.parent = props.parent;
    this.bindedListener = this.selectionChangeHandler.bind(this);

    document.addEventListener("selectionchange", this.bindedListener);
  }

  async selectionChangeHandler(e) { // just update state lmao
    // we can do filtering here if we have to
    this.parent.setState({selectedText: document.getSelection().toString(), e});
    await this.parent.fetchData();
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