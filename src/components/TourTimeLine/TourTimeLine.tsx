import { fetchData } from "@/hooks/fetchData";
import Timeline from "./Timeline"

interface TourTimeLineProps {
    id: string;
}
const TourTimeLine: React.FC<TourTimeLineProps> = async ({ id }) => {
    const tour = await fetchData(`get-single-tour/${id}`)
    return (
        <div className="p-8  min-h-screen">
            <div className="max-w-2xl mx-auto relative mb-10">
                <h2 className="text-2xl font-bold">Tour Plan</h2>
            </div>
            <Timeline items={tour.tourPlan} />
        </div>
    )
}
export default TourTimeLine