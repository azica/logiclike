import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { CourseService } from "utils/services/CourseService";

import style from "./style.module.scss";

const SideBar = () => {
    const [searchparams] = useSearchParams()
    const [selectedTag, setSelectedTag] = useState<string>(searchparams.get("filter") || "all");

    useEffect(() => {
        setSelectedTag(searchparams.get("filter") || "")
    }, [searchparams])

    const { data } = useQuery({ queryKey: ['tags'], queryFn: CourseService.getTags })

    return (
        <aside className={style.sidebar}>
            <ul className={style.sidebar_list}>
                <li>
                    <Link
                        to={`?filter=all`}
                        className={`${style.sidebar_link} ${selectedTag === "all" || selectedTag === "" ? style.selected : ''}`}>
                        Все темы
                    </Link>
                </li>
                {data?.map(tag => (
                    <li
                        key={tag}>
                        <Link
                            to={`?filter=${tag}`}
                            className={`${style.sidebar_link} ${tag === selectedTag ? style.selected : ''}`}>
                            {tag}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside >
    );
};

export default SideBar;
