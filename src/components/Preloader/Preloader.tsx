import { ReactComponent as SpinnerIcon } from 'assets/progress.svg';
import style from './style.module.scss';

const Preloader = ({ active }: { active: boolean }) => {
    return (
        <div className={`${style.preloader} ${active ? style.active : ''}`}>
            <div>
                <SpinnerIcon className={style.spinner} />
            </div>
        </div>
    );
};

export default Preloader;
