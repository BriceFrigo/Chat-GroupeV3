import { useEffect, useState } from "react";
import { collection ,addDoc, serverTimestamp, onSnapshot, query, where } from '@firebase/firestore';
import { auth, db } from '../firebase-config';
import '../css/style.css'

export const Chat = (props) =>{

    const {room} = props;
    

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room));
        const unsucribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            });
            setMessages(messages)
        });

        return () => unsucribe();  
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        });

        setNewMessage("");
    };

    return( 
    
    <div className="chat-app">
        <div className="important">
            <h1>{room}</h1>
        </div>
        <section className="text">
            <div className="messages">
                {messages.sort((a, b) => a.createAt?.seconds - b.createAt?.seconds).map((messages, i) => 
                <div className="message">
                    <span>{messages.user} : ➔ {messages.text}</span> 
                </div>
                )}
            </div>
        </section>

        <form  onSubmit={handleSubmit} className="new-message-from">
            <input 
                className="new-message-input"
                placeholder="Votre message..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
            />

            <button type="submit" className="send-button">Envoyer</button>
        </form>
    </div>
    )
}