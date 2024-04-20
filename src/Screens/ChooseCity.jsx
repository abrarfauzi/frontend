import React from 'react'

const ChooseCity = () => {
    return (
        <>
            <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
            <section id="Choose City" className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6" style="min-height: 600px;">
                <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">

                </h2>
                <div>
                    <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Pick the City</label>
                    <div className="relative mt-2">
                        <button type="button" className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                            <span className="flex items-center">

                                <span className="ml-3 block truncate">Akko</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>

                        <ul className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">


                                    <a href="#realEstate" className="hover:opacity-90"><span className="font-normal ml-3 block truncate">Akko</span></a>
                                </div>


                                <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </li>

                            {/* <!-- More items... --> */}
                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Haifa</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Nazareth</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Jerusalem</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Tel Aviv</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    <span className="font-normal ml-3 block truncate">Eilat</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Netanya</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    <span className="font-normal ml-3 block truncate">Herzliya</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Ashdod</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Tiberias</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Petah Tikva</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Holon</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Rishon LeZion</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Rehovot</span>
                                </div>
                            </li>

                            <li className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                <div className="flex items-center">

                                    {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                                    <span className="font-normal ml-3 block truncate">Bat Yam</span>
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>


            </section>
        </>
    )
}

export default ChooseCity