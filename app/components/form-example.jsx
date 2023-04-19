const React = require("react");

class FormExample extends React.Component {

    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.usernameInputChangeHandler = this.usernameInputChangeHandler.bind(this);

        this.state = {
            username: "default",
            age: 18,
            email: "def@d.com"
        };
    }

    submitHandler(e)
    {
        const username = this.state.username;
        alert("Username: " + username);
        this.setState({username: "***********"});
    }

    usernameInputChangeHandler(e)
    {
        this.setState({username: e.target.value});
    }

    render() {
        return <div>
            <h3>Form example: </h3>
            <form method="get" action="#" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Username</label>
                        <input onChange={this.usernameInputChangeHandler} value={this.state.username} type="text" className="form-control" id="exampleInputUsername" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input value={this.state.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={this.state.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                <button onClick={this.submitButtonHandler} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    }

}

module.exports.FormExample = FormExample;