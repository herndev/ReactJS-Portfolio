import React from 'react';

// Sidebar
function SideBar() {
    return (
        <div className="glass-card side-bar">
            <h4 className="name  p-3">
                Hernie Jabien<br />
                <small className="font-weight-normal">
                    Software Developer
                </small>
            </h4>

            <img src="img/hernie_hd.png" alt="Hernie Jabien" className="img-fluid side-banner" />

            <div className="key-points">
                <ul className="text-white pl-5 pr-2 list-unstyled">
                    <li className="big"></li>
                    <li>
                        <span className="font-weight-bold">Contact: </span><br />
                        <i className="ion-email text-white"></i>
                        <span className="ml-2">herniejabien45@gmail.com</span><br />
                    </li>
                    <li>
                        <span className="font-weight-bold">Web Development: </span><br />
                        <span>HTML/CSS/Javascript, Wordpress, Laravel, ReactJs, Django, Vue</span>
                    </li>
                    <li>
                        <span className="font-weight-bold">Mobile Application: </span><br />
                        <span>Java, Flutter, React native</span>
                    </li>
                    <li>
                        <span className="font-weight-bold">Databases: </span><br />
                        <span>Firebase, Mysql, Monggo DB, Postgres SQL, Sqlite</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}


// Export sidebar
export default SideBar;