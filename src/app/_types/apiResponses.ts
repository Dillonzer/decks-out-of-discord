export type DeckData = {
    twitchUser: string,
    decklist: string
}

type Set = {
    code: string,
    ptcgoCode: string,
    name: string,
    releaseDate: Date,
    symbolUrl: string,
    standardLegal: boolean,
    expandedLegal: boolean,
    glcLegal: boolean
}

export type DecklistCards = {
    deckCount: number,
    id: string,
    name: string,
    set: Set,
    number: string,
    hp?: number,
    cardText: string,
    weakness?: string,
    resistance?: string,
    retreatCost?: number,
    imageUrlHiRes: string,
    tcgPlayerCardId?: number,
    tcgPlayerCardUrl?: string,
    legalityIcon: string,
    rarity: string,
    type: string,
    craftingCost?: number,
    rulebox: boolean
}

export type Decklist = {
    cards: DecklistCards[]
}