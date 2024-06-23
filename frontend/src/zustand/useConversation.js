// Unlike other state management libraries like Redux, Zustand does not require a provider component to wrap the application. 
//This reduces the complexity of the component tree and simplifies the setup.
// Zustand an excellent choice for managing application state, especially in scenarios where reactivity and performance are crucial.
import {create} from 'zustand';

const useConversation = create((set) =>({
    selectedConversation:null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:[],
    setMessages: (messages) => set({messages})
}))

export default useConversation
