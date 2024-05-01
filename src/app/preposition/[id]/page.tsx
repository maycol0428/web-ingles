import React, { useEffect } from 'react'
export default function Page({ params }: { params: { id: string } }) {

    const id = params?.id



    return (
        <main>
            <div >{id}</div>
        </main>
    )
}


