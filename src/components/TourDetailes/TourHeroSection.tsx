import Image from 'next/image'

interface TourHeroSectionProps {
    url: string
    title: string
    subitile: string
}

const TourHeroSection: React.FC<TourHeroSectionProps> = ({ url, title, subitile }) => {
    return (
        <div className="relative w-full overflow-hidden" style={{ height: '50vh' }}>
            <Image
                src={url}
                alt={title}
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 text-center">
                    {title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-center">
                    {subitile}
                </p>
            </div>
        </div>
    )
}

export default TourHeroSection