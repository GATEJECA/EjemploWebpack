import Teacher from "./teacher";
import React, { Component } from 'react';

class Teachers extends Component {
    render() {
        console.log(this.props.data);
        return (
            <ul className="Teachers">
                {this.props.data.teachers.map((teacherData) => {
                    return <Teacher {...teacherData} />
                })}
            </ul>
        );
    }
}
export default Teachers;