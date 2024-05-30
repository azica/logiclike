import { FC } from "react";

import style from './style.module.scss';

const CourseItem: FC<Course> = ({ name, image, bgColor }) => {
    return (
        <div className={style.card}>
            <div className={style.card_image} style={{ backgroundColor: bgColor }}>
                <img src={image} alt={name} />
            </div>
            <h6 className={style.card_name}>{name}</h6>
        </div>
    )
}

export default CourseItem