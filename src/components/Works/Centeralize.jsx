import React from "react";

const Centralization = () => {
  return (
    <section className="relative w-full bg-[#fffaf7]  overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading Area */}
        <div className="text-center mb-6" style={{
          background: 'linear-gradient(180deg, #fffaf7 0%, rgba(254, 154, 75, 0.3) 60%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%, black 60%, transparent 100%)'
        }}>
          <h2 className="text-4xl mt-4 md:text-5xl text-gray-900 mb-4 font-poppins">
            One <span className="italic text-orange-400 font-Instrument">Centralized Workspace</span> that
            <br />
            Replaces Everything
          </h2>
          <p className="text-black text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
            Sevvy consolidates project management, file handling/feedback, approvals, publishing, and client access into a single system
            <br />
            designed for creative operations.
          </p>
        </div>

        {/* Circles Container */}
        <div className="relative w-full mt-16 mb-20">

          {/* TOP ROW */}
          <div className="flex justify-center items-center">

            {/* Intake */}
            <div className="relative z-10 w-[230px] h-[230px] md:w-[260px] md:h-[260px]
          rounded-full border-[8px] border-purple-300
          flex flex-col items-center justify-center text-center px-10 md:px-14" style={{background: 'none'}}>

              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{background: 'none'}}>
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h3 className="font-semibold mb-2">Intake</h3>
              <p className="text-xs leading-snug">
                Structured briefs, goals, assets,
                and deadlines captured upfront.
              </p>
            </div>


            {/* Execute (Center - slightly above + higher z) */}
            <div className="relative -mx-12 md:-mx-16 -mt-4 z-20 w-[230px] h-[230px] md:w-[260px] md:h-[260px]
          rounded-full border-[8px] border-orange-300
          flex flex-col items-center justify-center text-center px-10 md:px-14" style={{background: 'none'}}>

              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{background: 'none'}}>
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="font-semibold mb-2">Execute</h3>
              <p className="text-xs leading-snug">
                Tasks, files, and timelines aligned
                in one workspace.
              </p>
            </div>


            {/* Review */}
            <div className="relative z-10 w-[230px] h-[230px] md:w-[260px] md:h-[260px]
          rounded-full border-[8px] border-green-300
          flex flex-col items-center justify-center text-center px-6" style={{background: 'none'}}>

              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{background: 'none'}}>
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                </svg>
              </div>

              <h3 className="font-semibold mb-2">Review</h3>
              <p className="text-xs leading-snug">
                Timestamped feedback with one
                clear conversation thread.
              </p>
            </div>

          </div>


          {/* BOTTOM ROW */}
          <div className="flex justify-center items-center -mt-14 md:-mt-20">

            {/* Approve */}
            <div className="relative z-10 w-[230px] h-[230px] md:w-[260px] md:h-[260px]
          rounded-full border-[8px] border-yellow-300
          flex flex-col items-center justify-center text-center px-6" style={{background: 'none'}}>

              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{background: 'none'}}>
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="font-semibold mb-2">Approve</h3>
              <p className="text-xs leading-snug">
                Defined stages with visible status
                and version control.
              </p>
            </div>


            {/* Publish */}
            <div className="relative -mx-12 md:-mx-16 z-10 w-[230px] h-[230px] md:w-[260px] md:h-[260px]
          rounded-full border-[8px] border-sky-300
          flex flex-col items-center justify-center text-center px-6" style={{background: 'none'}}>

              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{background: 'none'}}>
                <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>

              <h3 className="font-semibold mb-2">Publish</h3>
              <p className="text-xs leading-snug">
                Approved work moves live and
                stays reusable.
              </p>
            </div>

          </div>

        </div>


        {/* CTA Button */}
        <div className="text-center mb-8">
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-200 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Unify Your Creative Stack Today
          </button>
        </div>

      </div>
    </section>
  );
};

export default Centralization;
