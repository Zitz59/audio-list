import style from './Header.module.css';

const Header = () => {
	return <header className={style.Header}>
		<div className='logo'>
			<img src = "https://cdn-icons.flaticon.com/png/512/4240/premium/4240243.png?token=exp=1642193061~hmac=6b76f5883a537ea5cbe9ea053343df51"></img>
		</div>
	</header>
}

export default Header;