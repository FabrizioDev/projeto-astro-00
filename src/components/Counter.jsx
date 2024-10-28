import { useState } from "preact/hooks";

export function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div class="max-w-5xl px-4 m-auto flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 class="text-white mb-4 mx-auto sm:text-3xl md:text-4xl text-center">Contador de Lançamentos</h2>
            <span class="text-yellow-300 text-4xl font-bold mb-4">
                {counter}
            </span>

            <div class="flex space-x-4 mb-4">
                <button
                    onClick={() => setCounter(counter => counter + 1)}
                    class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                    +
                </button>
                <button
                    onClick={() => setCounter(counter => counter - 1)}
                    class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                    -
                </button>
            </div>

            <span class="w-full h-10 flex justify-center items-center">
                <svg width="100%" height="100%" viewBox="-256 -256 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z" fill="#673ab8"/>
                    <ellipse cx="0" cy="0" stroke-width="16px" rx="75px" ry="196px" fill="none" stroke="white" transform="rotate(52.5)"/>
                    <ellipse cx="0" cy="0" stroke-width="16px" rx="75px" ry="196px" fill="none" stroke="white" transform="rotate(-52.5)"/>
                    <circle cx="0" cy="0" r="34" fill="white"/>
                </svg>
            </span>
        </div>
    );
}
