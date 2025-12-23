import { useState } from "react"

interface Props{
    onSubmit: (idea: string) => void
    loading: boolean
}



const PrompForm = ({onSubmit , loading}: Props) => {
    const [idea , setIdea] = useState("")

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        if (!idea.trim() ) return;
        onSubmit(idea)
    }
  return (
    <form onSubmit={handleSubmit} className='scace-y-4'>
        <textarea 
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder='Describe your website idea....'
        className='w-full min-h-[120px] p-4 border rounded-lg focus:outline-none focus:ring-2'
        />

        <button
        type='submit'
        disabled={loading}
        className='w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300'
        >
            {loading ? "Improvise..." : "Improvise Idea"}
        </button>
    </form>
  )
}

export default PrompForm