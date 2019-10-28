import React, { Component } from "react";
import Select from "react-select";

import { teamName } from "../../model/functions";
import "./react-select-style.css";

let teamListFull = teamName();

export class SelectTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: "Australia"
    };
    this.setTeam = this.setTeam.bind(this);
  }

  setTeam(teamListFull) {
    this.setState({
      selectedTeam: teamListFull
    });
    this.props.callbackFromParent(teamListFull);
  }
  render() {
    const { selectedTeam } = this.state;

    return (
      <div>
        <Select
          value={selectedTeam}
          onChange={this.setTeam}
          options={teamListFull}
          placeholder={selectedTeam}
          classNamePrefix={"react-select"}
          clearable={false}
          isSearchable={false}
          name="method"
        />
      </div>
    );
  }
}

export default SelectTeam;
