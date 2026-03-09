import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export const ProductCard = ({ item, addToCart }) => {
    const ref = useRef(null);
    const isIntersecting = useIntersectionObserver({ ref });

    useEffect(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            opacity: isIntersecting ? 1 : 0,
            y: isIntersecting ? 0 : 50,
            duration: 0.3,
            ease: "power2.out",
        });
    }, [isIntersecting]);

    return (
        <div
            ref={ref}
            className="product-card"
            style={{ opacity: 0, transform: "translateY(50px)" }}
        >
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>${item.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
};
