import {create} from 'zustand';

 export const useMessageStore = create((set) => ({
  message: '',
  messageType: '',
  setMessage: (message, type = 'success') => set({message, messageType: type}),
  clearMessage: () => set({message: '', messageType: ''}),
}))

