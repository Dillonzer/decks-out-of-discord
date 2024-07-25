'use client'

import { useEffect, useState } from 'react';
import { DeckData, Decklist } from '../_types/apiResponses';
import { MouseEvent } from 'react';
import { createDecklist } from '../actions';
import DeckViewer from './deckViewer';

type DropdownProps = {
    decks : DeckData[]
}

export default function AdminDashboard({decks} : DropdownProps) {
    const [isOpen, setDropdown] = useState(false);    
    const [currentDecklistOwner, setCurrentDecklistOwner] = useState("" as string | null);    
    const [currentDecklist, setDecklist] = useState({} as Decklist);

    const renderValues = (decks : DeckData[]) => { return decks.map(value => <li className="border-2 hover:bg-blue-300 cursor-pointer" onClick={handleClick} key={value.twitchUser} value={value.decklist}>{value.twitchUser}</li>)}

    const handleClick = async (event : MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        const deckListValue = event.currentTarget.getAttribute('value')
        setCurrentDecklistOwner(event.currentTarget.innerHTML)
        var deckReturned = await createDecklist(deckListValue)        
        setDecklist(deckReturned)
    }

    return (
        <div className="flex">
            <div className="flex-none w-2/5">
                <div className='float-left border-2 border-black'>
                    <button className='border-2 bg-blue-700 rounded-lg p-5 font-bold  text-white border-black' onClick={() => setDropdown(!isOpen)}>DooD Decks</button>
                    {
                        isOpen ?
                        <ul>
                            {renderValues(decks)}
                        </ul>
                        :
                        <></>
                    }
                </div>
                <div className='float-left p-5 border-2 border-black'>
                    <p>{currentDecklistOwner}</p>
                </div>
            </div>
            <div className="flex-1"> 
            </div>
        </div>
    )
}