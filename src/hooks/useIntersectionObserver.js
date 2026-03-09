import { useEffect, useState } from "react";

export const useIntersectionObserver = ({ ref }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
};
