import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { CourseService } from 'utils/services/CourseService';
import { MemoizedCourseItem, Preloader } from 'components';

import style from "./style.module.scss";

const CourseList = () => {
    const [searchparams] = useSearchParams();
    const [query, setQuery] = useState("all");

    useEffect(() => {
        setQuery(searchparams.get("filter") || "all");
    }, [searchparams]);

    const { data, isLoading, error } = useQuery({
        queryKey: ['courses', query],
        queryFn: () => CourseService.getCourses({ query }),
        enabled: !!query,
    })

    if (isLoading) return <Preloader active={isLoading} />
    if (error) return <div>Error loading courses</div>;

    return (
        <div className={style.list}>
            {data?.map(course => (
                <MemoizedCourseItem key={course.id} {...course} />
            ))}
        </div>
    );
};

export default CourseList;
