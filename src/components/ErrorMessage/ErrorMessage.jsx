export default function ErrorMessage({ message }) {
    return (
        <div class='bg-white drop-shadow-sm rounded-sm p-4 w-full text-center font-bold text-lg'>
            ERROR: {message}
        </div>
    )
}
