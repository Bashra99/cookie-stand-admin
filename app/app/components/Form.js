import React, { useState } from 'react'

export default function Form() {
    const [location, setLocation] = useState("");
    const [minCustomers, setMinCustomers] = useState("");
    const [maxCustomers, setMaxCustomers] = useState("");
    const [avgCookies, setAvgCookies] = useState("");
    const [fullReplyState, setFullReplyState] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const fullReply = {
            location: location,
            minCustomers: minCustomers,
            maxCustomers: maxCustomers,
            avgCookies: avgCookies,
        }
        setFullReplyState(`location : ${location} , minCustomers : ${minCustomers} , maxCustomers : ${maxCustomers} , avgCookies : ${avgCookies}`)
    }
    return (
        <div class="mb-60 mr-20 mt-10  dark:text-white ">
            <form
                onSubmit={handleSubmit}>
                <div class="lex flex-wrap mb-6 border-b border-orange-400 ">
                    <label >Location</label>
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        autoComplete="off"
                        id="location"
                        name="location"
                        type="text"
                        class=" bg-transparent text-black-100 rounded py-3 px-4 focus:outline-none "
                    />
                </div>
                <div class="lex flex-wrap mb-6 border-b border-red-400">
                    <label>
                        Minimum Customers per Hour
                    </label>
                    <input
                        onChange={(e) => setMinCustomers(e.target.value)}
                        autoComplete="off"
                        id="location"
                        name="location"
                        type="text"
                        class="bg-transparent text-black-100 rounded py-3 px-4 focus:outline-none"
                    />
                </div>
                <div class="lex flex-wrap mb-6 border-b border-orange-400">
                    <label >
                        Maximum Customers per Hour
                    </label>
                    <input
                        onChange={(e) => setMaxCustomers(e.target.value)}
                        autoComplete="off"
                        id="location"
                        name="location"
                        type="text"
                        class="bg-transparent text-black-100 rounded py-3 px-4 focus:outline-none"
                    />
                </div>
                <div class="lex flex-wrap mb-6 border-b border-orange-400">
                    <label>
                        Average Cookies per Sale
                    </label>
                    <input
                        onChange={(e) => setAvgCookies(e.target.value)}
                        autoComplete="off"
                        id="location"
                        name="location"
                        type="text"
                        class="bg-transparent text-black-100 rounded py-3 px-4 focus:outline-none"
                    />
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <button
                        class="shadow bg-orange-500 hover:bg-orange-200 focus:shadow-outline focus:outline-none text-orange-900 font-bold py-2 px-10 rounded-full"
                    >Create</button>
                </div>
            </form>
            <section class="mx-auto text-center shadow-lg shadow-black-50">
                {fullReplyState && (
                    <div>
                        <p class="border-green-400 border-4 p-8 text-neutral-800 font-bold">
                            {fullReplyState}
                        </p>
                    </div>
                )}
            </section>
        </div>

    )
}