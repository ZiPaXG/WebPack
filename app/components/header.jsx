const React = require("react");

class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(props)
    {
        return <div className="header">
                    <h1>{this.props.head}</h1>
                    <h3>День недели: {this.props.date}</h3>
                    <hr/>
                    <h5>ФИО: {this.props.name}</h5>
               </div>

    }
}

module.exports.Header = Header;