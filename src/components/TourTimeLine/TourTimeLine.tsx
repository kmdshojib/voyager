import Timeline from "./Timeline"

interface TourTimeLineProps {
    data?: any;
}
const TourTimeLine: React.FC<TourTimeLineProps> = ({ data }) => {

    return (
        <div className="p-8  min-h-screen">
            <div className="max-w-2xl mx-auto relative mb-10">
                <h2 className="text-2xl font-bold">Tour Plan</h2>
            </div>
            <Timeline items={data.tourPlan} />
        </div>
    )
}
export default TourTimeLine