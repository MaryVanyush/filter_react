import { Component } from 'react'
import './Projectlist.css';

export default class ProjectList extends Component {
    
  render() {
    const { projects} = this.props;
    const cards = projects.map(project => {
       return <img src={project.img}  className = {`card ${project.category}`} key ={crypto.randomUUID()} alt = {`${project.category}`}/>
    })
    return (
      <div className = 'cards'>{cards}</div>
    )
  }
}
