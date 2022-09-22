import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };
    const search = (event) => {
        // console.log('onKeyPress')
        let keyword = event.target.value;
        if (event.key === 'Enter') {
            // console.log('우리가 누른 키는?',event.key)
            // console.log('우리가 입력한 키워드는?',keyword)
            navigate(`/?q=${keyword}`);
        }
    };
    return (
        <div>
            <div>
                {authenticate == true ? (
                    <div className="login-button" onClick={() => setAuthenticate(false)}>
                        <FontAwesomeIcon icon={faUser} className="login-icon" />
                        <div>로그아웃</div>
                    </div>
                ) : (
                    <div
                        className="login-button"
                        onClick={() => {
                            navigate('/login');
                        }}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                )}
            </div>
            {/* login */}
            <div className="nav-section" onClick={goToHome}>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" alt="h&m logo" />
            </div>
            {/* logo */}
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="제품검색" onKeyPress={(event) => search(event)} />
                </div>
            </div>
            {/* search/menu */}
        </div>
    );
};

export default Navbar;
