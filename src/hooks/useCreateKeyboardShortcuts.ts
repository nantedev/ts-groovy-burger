import { useEffect } from "react";

export const useCreateKeyboardShortcuts = (keyboardKey: string, callbackAction: () => void) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === keyboardKey) {
            event.preventDefault();
            callbackAction && callbackAction();
        }
}
useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
}, [callbackAction])
}

// Usage : 
// useCreateKeyboardShortcuts("i", toggleAdminMode);
// useCreateKeyboardShortcuts("j", toggleAdminPanel);

// Explications :
// - Le hook prend en paramètres la touche clavier (keyboardKey) et l'action à exécuter (callbackAction).
// - La fonction handleKeyDown vérifie si la touche Ctrl ou Cmd est pressée avec la touche spécifiée.
// - Le useEffect ajoute l'écouteur d'événement au montage et le retire au démontage pour éviter les fuites de mémoire.
// - Le tableau de dépendances [callbackAction] garantit que l'effet est mis à jour si l'action change.

