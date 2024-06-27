import Image from "next/image";

const featureItems = [
  {
    id: 1,
    title: "Fix emergencies fast",
    description:
      "Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks",
    iconSvg: `<svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" fill="#09090B"/>
<rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" stroke="#27272A"/>
<path d="M26 18.5352H30" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 30.5352L31 27.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 38.5352C32.4183 38.5352 36 34.9534 36 30.5352C36 26.1169 32.4183 22.5352 28 22.5352C23.5817 22.5352 20 26.1169 20 30.5352C20 34.9534 23.5817 38.5352 28 38.5352Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  },
  {
    id: 2,
    title: "Universally compatible",
    description: "Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system",
    iconSvg: `<svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" fill="#09090B"/>
<rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" stroke="#27272A"/>
<path d="M37 32.5352L33 36.5352L29 32.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33 36.5352V20.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 24.5352L23 20.5352L27 24.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 20.5352V36.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  },
  {
    id: 3,
    title: "Secure for your org",
    description: "We keep your data safe by taking top security measures.",
    iconSvg: `<svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" fill="#09090B"/>
<rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" stroke="#27272A"/>
<path d="M25 19.5352H21C19.8954 19.5352 19 20.4306 19 21.5352V25.5352C19 26.6397 19.8954 27.5352 21 27.5352H25C26.1046 27.5352 27 26.6397 27 25.5352V21.5352C27 20.4306 26.1046 19.5352 25 19.5352Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 27.5352V31.5352C23 32.0656 23.2107 32.5743 23.5858 32.9494C23.9609 33.3244 24.4696 33.5352 25 33.5352H29" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M35 29.5352H31C29.8954 29.5352 29 30.4306 29 31.5352V35.5352C29 36.6397 29.8954 37.5352 31 37.5352H35C36.1046 37.5352 37 36.6397 37 35.5352V31.5352C37 30.4306 36.1046 29.5352 35 29.5352Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  },
];

const Feature = () => {
  return (
    <div className="mx-auto">
      {/* code for upper features */}
      <div className="mt-24 mx-10 md:mx-20 lg:mx-36">
        <h1 className="hidden md:block text-5xl font-extrabold leading-[48px] tracking-[-0.012em] text-center">
          Quick solutions, less stress
        </h1>
        <h1 className="md:hidden text-3xl font-semibold tracking-[-0.0075em] text-center">
          Immediate Solutions, Less Stress
        </h1>
        <div className="mt-12 md:flex justify-center items-center  md:gap-12">
            {
                featureItems.map((item)=>{
                    return(
                        <div key={item.id} className="my-12 md:my-0">
                            <div className="flex items-start">
                            <div dangerouslySetInnerHTML={{ __html: item.iconSvg }} />
                            </div>
                                  
                            <h3 className="text-2xl font-semibold leading-9 tracking-[-0.006em] text-left text-[#D9D9D9] py-6">
                                {item.title}
                            </h3>
                            <p className="text-sm font-normal leading-7 text-left text-[#D9D9D9]">
                                {item.description}
                            </p>

                        </div>
                    )
                })
            }
        </div>
      </div>

      {/* code for 2nd feature */}
            <div className="mt-24 md:mt-36 md:mx-[304px]">
        

                <h1 className="text-3xl font-semibold leading-9 tracking-[-0.0075em] md:text-5xl md:font-extrabold md:leading-[48px] md:tracking-[-0.012em] text-center text-[#FAFAFA]">
                    Instant setup, no custom code    
                </h1>
                <h5 className="text-sm leading-[28px] py-6 px-1 md:px-0  md:text-lg font-normal md:leading-[18px] text-center text-[#D9D9D9]">
                Invite the bot, pick a channel, and you're set—no custom code needed, and no vendor lock-in.
                </h5>
                <Image width={672} height={415} src="/images/image2.png" alt="programming pathshala image"/>
            </div>
    </div>
  );
};

export default Feature;
