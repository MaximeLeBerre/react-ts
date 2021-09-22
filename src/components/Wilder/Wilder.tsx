import React, { ReactElement} from "react";
import  PropTypes  from 'prop-types'
import blank_profile from "../../styles/blank-profile-picture-female.png";
import Skill from "../Skill/Skill";
import { Card, List } from "../../styles/elements";

type SkillsProps = {
  _id?: number;
  votes : number;
  title: string;
}

interface WilderProps{  
  city: string
  name:string
  skills: SkillsProps[]
}

function Wilder({ city, name, skills }: WilderProps): ReactElement {
  return (
    <Card>
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>City</h4>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skill key={skill._id} title={skill.title} votes={skill.votes} />
        ))}
      </List>
    </Card>
  );
}

export default Wilder;

Wilder.propTypes = {
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired
  })).isRequired 
}
