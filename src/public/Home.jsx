import { Hero } from "../components/homeC/hero"
import { Info } from "../components/homeC/info"
import { Services } from "../components/homeC/services"
import { FrecuentQuestions } from "../components/homeC/frecuentQuestions"
export const Home = () => {

    return (
        <>
            <Hero />
            <Info />
            <Services />
            <FrecuentQuestions />
        </>
    )
}