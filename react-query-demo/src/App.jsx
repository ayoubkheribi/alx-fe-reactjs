import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PostsComponent from './components/PostsComponent'
const queryClient = new QueryClient()
import './App.css'

function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
      <h1>Posts</h1>
      <PostsComponent />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default App