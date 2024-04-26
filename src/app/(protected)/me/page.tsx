import * as React from 'react';
import { auth } from '@/auth';

export default async function Page() {

    const session = await auth()
    if (!session) return <div>Not authenticated</div>

    return (
        <div className="p-4 sm:ml-64">
            ME PAGE
        </div>
    )
}