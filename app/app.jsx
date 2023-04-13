const ReactDOM = require("react-dom/client");
const React = require("react");
const SheduleTable  = require("./components/shedule.jsx").SheduleTable;

ReactDOM.createRoot(
    document.getElementById("app")
).render(
    <SheduleTable/>
);