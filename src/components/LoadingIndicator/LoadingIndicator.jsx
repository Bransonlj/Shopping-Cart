/**
 *  * Renders a loading indicator with a customizable label. If no label is provided, it defaults to "Loading...".
 * @param {Object} props - The props object.
 * @param {string} [props.label] - Optional label text to display. Defaults to "Loading...".
 */
export default function LoadingIndicator({ label }) {
    return (
        <div className='bg-white drop-shadow-sm rounded-sm p-4 w-full text-center font-bold text-lg'>
            { label ?? 'Loading...' }
        </div>
    )
}