import React from 'react'
import Container from '@/components/Container/Container';
import TourTimeLine from '@/components/TourTimeLine/TourTimeLine';

const Page = async ({ params }: { params: { id: string } }) => {
    const cleanId = decodeURIComponent(params.id);
    return (
        <div>
            <Container>
                
                <TourTimeLine id={cleanId}/>
            </Container>
        </div>
    )
}

export default Page
