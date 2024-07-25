import * as React from 'react';
import { getSubmittedDecks } from '../../actions';
import AdminDashboard from '../../_components/adminDashboard';


export default async function SubmittedDecks() {
    const decks = await getSubmittedDecks()
    return (
        <div>
            <AdminDashboard decks={decks}/>
        </div>
    )
}