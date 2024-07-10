import PageContent from "../Components/PageContent"
import Carousel from "../Components/Carousel"
import Card from "../Components/Card"
import OverView from "../Components/OverView"

function HomePage() {

    return (
        <PageContent>
            <Carousel ></Carousel>
            <Card></Card>
            <OverView />

        </PageContent>
    )
}

export default HomePage