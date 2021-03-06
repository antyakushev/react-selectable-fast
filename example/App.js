import React, { Component, PropTypes } from 'react'
import autobind from 'autobind-decorator'
import { SelectableGroup } from '../src'
import List from './List'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedItems: [],
      selectingItems: [],
      tolerance: 0,
    }
  }

  @autobind
  handleSelecting(selectingItems) {
    this.setState({ selectingItems })
  }

  @autobind
  handleSelectionFinish(selectedItems) {
    this.setState({
      selectedItems,
      selectingItems: [],
    })
    console.log(`Finished selection ${selectedItems.length}`)
  }

  handleSelectionClear() {
    console.log('Cancel selection')
  }

  render() {
    return (
      <div>
        <p>
          Selecting: <span className="counter">{this.state.selectingItems.length}</span>
          <br />
          Selected: <span className="counter">{this.state.selectedItems.length}</span>
        </p>
        <SelectableGroup
          className="main"
          clickClassName="tick"
          duringSelection={this.handleSelecting}
          onSelectionFinish={this.handleSelectionFinish}
          onSelectionClear={this.handleSelectionClear}
          globalMouse={this.state.isGlobal}
          tolerance={this.state.tolerance}
          whiteList={['.not-selectable', '.item:nth-child(10)', '.item:nth-child(27)']}
          allowClickWithoutSelected={false}
          dontClearSelection
        >
          <List items={this.props.items} />
        </SelectableGroup>
      </div>
    )
  }
}

export default App
