import { useState, useEffect, useDebugValue } from 'react';
import { firestorage } from "../../utils/firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = firestorage.collection(collection)
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents);
        });

        return () => unsub();
    }, [collection])

    return { docs };
}

export default useFirestore;