const React = require("react");

class Lesson extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <tr>
            <td className="time">{this.props.time}</td>
            <td className="subject textCenter">{this.props.subject}</td>
        </tr>
    }
}

module.exports.Lesson = Lesson;