const ReactDOM = require("react-dom/client");
const React = require("react");
const SheduleTable  = require("./components/shedule.jsx").SheduleTable;
const CreaterPassword = require("./components/creater-password.jsx").CreaterPassword;
const GeneratePassword = require("./utils/utils.jsx").GeneratePassword;
const FormExample = require("./components/form-example.jsx").FormExample;

ReactDOM.createRoot(
    document.getElementById("app")
).render(
    <div>
        <CreaterPassword/>
    </div>
);