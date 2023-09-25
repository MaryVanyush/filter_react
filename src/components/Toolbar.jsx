import { Component } from 'react'
import './Toolbar.css';

export default class Toolbar extends Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;
    const buttonsPanel = filters.map(filter => {
        return <button className = {filter === selected ? 'buttonFilter selected' : 'buttonFilter'} key ={crypto.randomUUID()} onClick={(e) => {
            e.preventDefault();
            onSelectFilter(filter)
        }}>{filter}</button>
     })

    return (
      <div className = 'buttonsPanel'>{buttonsPanel}</div>
    )
  }
}
