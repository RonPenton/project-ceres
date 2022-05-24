import React from "react";
import * as ReactDOM from 'react-dom';

import './index.scss';

export const App: React.FC<{}> = () => {

    return <div>Howdy!</div>
}


ReactDOM.render(React.createElement(App), document.getElementById("react"));
