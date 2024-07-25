'use server'

import { DeckData, Decklist } from "./_types/apiResponses";

const API_URL = 'https://pkmntcgapi-production.up.railway.app'


export async function getSubmittedDecks() : Promise<DeckData[]> {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const requestOptions = {
      method: 'GET',
      headers: headers
    };
    const response = await fetch(`${API_URL}/deckutils/dood/getAllDecks`, requestOptions)

    if (!response.ok) {
        throw new Error('Error fetching submitted decks ' + response.statusText);
      }

      const jsonData: DeckData[] = await response.json();
      return jsonData;
}

export async function createDecklist(decklist: string | null) : Promise<Decklist> {
  if(decklist == null) { throw new Error ('Null Deck') }

  let raw = JSON.stringify({"decklist": decklist.trim()});

  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: raw
  };

  const response = await fetch(`${API_URL}/deckutils/generateDecklist`, requestOptions)

  if (!response.ok) {
      throw new Error('Error created decklist ' + response.statusText);
    }

    const jsonData: Decklist = await response.json();
    return jsonData;
}