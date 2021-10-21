import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
          // Obteniendo toda la info
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        // SI NO HAY UN ESPACIO DONDE GUARDAR LA INFORMACION, ENTONCES AÑADIRA UN NUEVO ESPACIO CON UN VALOR INICIAL PARSEADO
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          // EL ELEMENTO PARSEADO SE VA A CONVERTIR EN LA INFORMACION INICIAL
          parsedItem = initialValue;
        } else {
            // Si hay info, entonces parcear el valor inicial A JAVASCRIPT
          parsedItem = JSON.parse(localStorageItem);
        }

        // va a cambiar item por la info parceada
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
    // va a parcear la info a texto
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export default useLocalStorage;