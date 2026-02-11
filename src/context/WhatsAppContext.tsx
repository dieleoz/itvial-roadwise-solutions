import React, { createContext, useContext, useState, ReactNode } from "react";

interface WhatsAppContextType {
    message: string;
    setWAMessage: (msg: string) => void;
    resetWAMessage: () => void;
}

const defaultMessage = "Hola, me gustaría recibir información sobre sus soluciones de infraestructura vial.";

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
    const [message, setMessage] = useState(defaultMessage);

    const setWAMessage = (msg: string) => setMessage(msg);
    const resetWAMessage = () => setMessage(defaultMessage);

    return (
        <WhatsAppContext.Provider value={{ message, setWAMessage, resetWAMessage }}>
            {children}
        </WhatsAppContext.Provider>
    );
}

export function useWhatsApp() {
    const context = useContext(WhatsAppContext);
    if (context === undefined) {
        throw new Error("useWhatsApp must be used within a WhatsAppProvider");
    }
    return context;
}
