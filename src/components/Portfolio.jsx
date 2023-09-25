import { Component } from 'react'
import data from '../data.json'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'
import './Portfolio.css';

export default class Portfolio extends Component {

listProjects = data;

state = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    selected: "All",
    actualList: data,
}


onSelectFilter = (filter) => {
    this.setState({ selected: filter })
    this.setState({ actualList: filter === 'All' ? this.listProjects : this.listProjects.filter(project => project.category ===  filter) })
    }

  render() {
    return (
        <div className = 'wrapper'>
            <Toolbar filters = {this.state.filters}
                    selected = {this.state.selected}
                    onSelectFilter={this.onSelectFilter}
            />
            <ProjectList projects = {this.state.actualList}/>
        </div>
    
    )
  }
}
