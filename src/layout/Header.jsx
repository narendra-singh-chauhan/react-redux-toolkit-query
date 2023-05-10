// packages
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
// hooks
import useToggle from '../hooks/useToggle';
// store
import { useGetUserQuery } from '../store/api/userApi';


const Header = () => {
    const { isOpen: isUserMenuOpen, onClose: onUserMenuClose, onToggle: onUserMenuToggle } = useToggle();
    const { isOpen: isNavMenuOpen, onToggle: onNavMenuToggle } = useToggle();
    const { data: user } = useGetUserQuery();

    return (
        <header className="border-b-[1px] border-gray-200">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </Link>
                    <div className="flex items-center md:order-2 relative">
                        <OutsideClickHandler onOutsideClick={onUserMenuClose}>
                            <button onClick={onUserMenuToggle} type="button" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-3">
                                    <img className="w-full h-full mb-3 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                </div>
                                {user?.firstName} {user?.lastName}
                            </button>
                            <div className={`z-50 ${isUserMenuOpen ? 'flex' : 'hidden'} w-full absolute top-[35px] left-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}>
                                <ul className="py-2 font-medium w-full" role="none">
                                    <li>
                                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                            <div className="inline-flex items-center">
                                                Profile
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                            <div className="inline-flex items-center">
                                                Settings
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                            <div className="inline-flex items-center">
                                                Sign Out
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </OutsideClickHandler>
                        <button onClick={onNavMenuToggle} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-language-select" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${isNavMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
                        <ul className="w-full flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/todos" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Todos</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</Link>
                            </li>
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;