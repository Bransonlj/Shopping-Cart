
export default function LoadingIndicator({ label }) {
    return (
        <div className='bg-white drop-shadow-sm rounded-sm p-4 w-full text-center font-bold text-lg'>
            { label ?? 'Loading...' }
        </div>
    )
}