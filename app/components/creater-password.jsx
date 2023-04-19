const React = require("react");
const GeneratePassword = require("../utils/utils.jsx").generatePassword;

class CreaterPassword extends React.Component {
    constructor(props)
    {
        super(props);
        this.createPasswordButton = this.createPasswordButton.bind(this);
        this.lengthChange = this.lengthChange.bind(this);
        this.passwordLengthRef = React.createRef(); // создали переменную ссылку

        this.state = {
            password: "default",
            length: 1
        }
    }

    createPasswordButton(e)
    {
        const generPassword = GeneratePassword(this.passwordLengthRef.current.value);
        this.setState({password: generPassword});
        e.preventDefault();
    }

    lengthChange(e)
    {
        this.setState({length: e.target.value});
    }

    render()
    {
        return <div className="m-3">
        <h3>Generator Passwords: </h3>
        <form method="get" action="#" onSubmit={this.createPasswordButton}>
                <div className="form-group">
                    <label>Length password: </label>
                    <input type="number" ref={this.passwordLengthRef} className="form-control" id="exampleInputUsername" placeholder="Enter length password:"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" value={this.state.password} readOnly className="form-control" id="exampleInputEmail1" placeholder="Password"/>
                </div>
            <button type="submit" className="btn btn-primary">Create password</button>
        </form>
    </div>
    }
}

module.exports.CreaterPassword = CreaterPassword;