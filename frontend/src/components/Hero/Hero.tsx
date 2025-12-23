import { useState } from 'react'
import PrompForm from './PrompForm'
import ResultBox from './ResultBox'
import { improvePrompt } from '../services/prompt.api'

const Hero = () => {
    const [result , setResult] = useState("")
    const [loading , setLoading] = useState(false)
    const [error , setError] = useState("")

    async function handleSubmit(idea: string){
        try {
            setLoading(true)
            setError("")

            const data = await improvePrompt(idea)
            setResult(data.improvedPrompt)
        } catch (error) {
            setError("Something went wrong. Please try again.")
        }finally {
        setLoading(false)
        }
    }

    function handleReset(){
        setResult("")
        setError("")
    }
  return (
    <section className='min-h-screen flex items-center justify-center px-4'>
        <div className="max-w-2xl w-full">
            <h1 className='text-4xl font-bold mb-4'>
                Turn Your Website Idea into a Stunning Prompt
            </h1>
            <p className="text-gray-600 mb-8 tex-sm">
                Describe your website idea and get a clearer, more actionable prompt.
            </p>

            
                <PrompForm onSubmit={handleSubmit} loading={loading} />
                <ResultBox result={result} />

                <button onClick={handleReset} className='mt-4 text-sm text-gray-600 underline'>Reset</button>
                {error && <p className='text-red-500'>{error}</p>}
            
        </div>
    </section>
  )
}

export default Hero