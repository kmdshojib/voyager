import React from 'react'
import { useRouter } from 'next/navigation'

const Page = ({ params }: { params: { id: string } }) => {
    const cleanId = decodeURIComponent(params.id);

    console.log(cleanId)
    return (
        <div>
            <h1>Tour Page</h1>
           
        </div>
    )
}

export default Page
