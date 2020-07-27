// import React, { memo, useMemo } from 'react';
// import { listItemLogin } from '../store/Login';


// const ToolText = memo(function ({ username, onChange }) {
//     const renderText = useMemo(() =>
//         listItemLogin.map((item, index) => {
//             return (
//                 <input
//                     key={index.toString()}
//                     path={`${router.parentPath}${router.path}`}
//                     component={router.component}
//                     exact={router.exact === true}
//                 />
//             );
//         }), []);
//     return (

//         <div className="inputfield">
//             <label>Username</label>
//             <input
//                 type="text"
//                 className="input"
//                 name="username"
//                 value={username}
//                 onChange={e => onChange(e)}
//             />
//         </div>
//     );
// });
// export default ToolText;