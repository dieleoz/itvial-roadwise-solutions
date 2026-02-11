import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface QuoteItem {
    id: string;
    name: string;
    category: string;
}

interface QuoteState {
    items: QuoteItem[];
}

type QuoteAction =
    | { type: 'ADD_ITEM'; item: QuoteItem }
    | { type: 'REMOVE_ITEM'; id: string }
    | { type: 'CLEAR_QUOTE' };

const QuoteContext = createContext<{
    state: QuoteState;
    dispatch: React.Dispatch<QuoteAction>;
} | undefined>(undefined);

const quoteReducer = (state: QuoteState, action: QuoteAction): QuoteState => {
    switch (action.type) {
        case 'ADD_ITEM':
            if (state.items.find((i) => i.id === action.item.id)) return state;
            return { ...state, items: [...state.items, action.item] };
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.filter((i) => i.id !== action.id) };
        case 'CLEAR_QUOTE':
            return { ...state, items: [] };
        default:
            return state;
    }
};

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(quoteReducer, { items: [] }, (initial) => {
        const saved = localStorage.getItem('itvial_quote');
        return saved ? JSON.parse(saved) : initial;
    });

    useEffect(() => {
        localStorage.setItem('itvial_quote', JSON.stringify(state));
    }, [state]);

    return (
        <QuoteContext.Provider value={{ state, dispatch }}>
            {children}
        </QuoteContext.Provider>
    );
};

export const useQuote = () => {
    const context = useContext(QuoteContext);
    if (!context) {
        throw new Error('useQuote must be used within a QuoteProvider');
    }
    return context;
};
