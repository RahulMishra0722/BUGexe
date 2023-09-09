import Image from 'next/image'
import Header from '../../Components/Header'

export default function Home() {
  return (
    <div>
<div className="bg-red-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-500 border-2 border-gray-600">
  This is a div with Tailwind CSS classes
</div>
<Header></Header>
    </div>
  )
}
